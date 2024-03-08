import { OpenAI } from "openai";
import { getTimeOfDay, getOrderStatus } from './tools';

const model = 'gpt-3.5-turbo-0613';

const openai = new OpenAI();

const callOpenAIWithText = async () => {
    const context: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        {
            role:'system',
            content:'Eres un asistente muy útil que da información acerca de la hora del día y del estatus de las órdenes'
        },
        {
            role: 'user',
            content: 'cuál es el estatus de la orden 1234?'
        }
    ];

    // 1. configurar chat tools (primer request a openai)
    const response = await openai.chat.completions.create({
        model: model,
        messages: context,
        tools:[
            {
                type: 'function',
                function: {
                    name: 'getTimeOfDay',
                    description: 'Devuelve la hora del día',
                },
            },
            {
                type:'function',
                function:{
                    name: 'getOrderStatus',
                    description: 'Devuelve el estatus de una orden',
                    parameters:{
                        type:'object',
                        properties:{
                            orderId:{
                                type:'string',
                                description: 'el id de la orden para obtener el estatus'
                            }
                        },
                        required:['orderId']
                    }
                }
            }
        ],
        tool_choice:'auto' // el modelo decide qué tool usar
    });

    // 2. decidir si la tool es requerida (la decisión se basa en la respuesta recibida por la primer llamada)

    const willInvokeFunction = response.choices[0].finish_reason == 'tool_calls';
    const toolCall = response.choices[0].message.tool_calls![0];

    if ( willInvokeFunction ){
        const toolName = toolCall.function.name;

        if( toolName == 'getTimeOfDay' ){
            const toolResponse = getTimeOfDay();

            context.push(response.choices[0].message);
            context.push({
                role:'tool',
                content: toolResponse,
                tool_call_id: toolCall.id
            });
        }
        
        if( toolName == 'getOrderStatus' ){
            const rawArgument = toolCall.function.arguments;
            const parsedArguments = JSON.parse( rawArgument );
            
            const toolResponse = getOrderStatus(parsedArguments.orderId);

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

    console.log(secondResponse.choices[0].message.content);

}

callOpenAIWithText();
