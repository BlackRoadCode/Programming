import { OpenAI } from "openai";
import { model, deleteOlderMessages } from "./tools/utilities";
import { getFlightAvailability, reserveFlightByDestiny } from "./tools/tools";

const openai = new OpenAI();
const MAX_TOKENS = 700;

const context: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [{
    role:'system',
    content:'Eres un asistente para búsqueda y reserva de vuelos por destino.'
}];

const callOpenAiWithTools = async () => {

    const response = await openai.chat.completions.create({ 
        model: model,
        messages: context,
        tools:[
            {
                type:'function',
                function:{
                    name: 'reserveFlightByDestiny',
                    description: 'Hace la reserva del vuelo en el destino elegido y devuelve el número de reserva',
                }
            },
            {
                type: 'function',
                function: {
                    name: 'getFlightAvailability',
                    description: 'Devuelve la disponibilidad entre destinos',
                    parameters:{
                        type:'object',
                        properties:{
                            flightDestiny:{
                                type:'string',
                                description: 'El código ICAO del destino'
                            }
                        },
                        required:['flightDestiny']
                    }
                },
            }
        ],
        tool_choice:'auto'
    });

    const willInvokeFunction = response.choices[0].finish_reason == 'tool_calls';    
    
    if ( willInvokeFunction ){
        const toolCall = response.choices[0].message.tool_calls![0];
        const toolName = toolCall.function.name;

        if( toolName == 'getFlightAvailability' ){
            const rawArgument = toolCall.function.arguments;
            const parsedArguments = JSON.parse( rawArgument );

            const toolResponse = getFlightAvailability(parsedArguments.flightDestiny);

            context.push(response.choices[0].message);
            context.push({
                role:'tool',
                content: toolResponse,
                tool_call_id: toolCall.id
            });            
        }
        
        if( toolName == 'reserveFlightByDestiny' ){            
            const toolResponse = reserveFlightByDestiny();

            context.push(response.choices[0].message);
            context.push({
                role:'tool',
                content: toolResponse,
                tool_call_id: toolCall.id
            });
        }
        
    }
    
    const secondResponse = await openai.chat.completions.create({
        model: model,
        messages: context,
    });

    console.log(`${ response.choices[0].message.role }: ${ response.choices[0].message.content }`);

    if( response.usage && response.usage.total_tokens > MAX_TOKENS || secondResponse.usage && secondResponse.usage.total_tokens > MAX_TOKENS ){
        deleteOlderMessages( context, MAX_TOKENS );
    }

};

process.stdin.addListener( 'data', async ( input ) => {
    const userInput = input.toString().trim();

    context.push({
        role: 'user',
        content: userInput
    });

    await callOpenAiWithTools();
});


