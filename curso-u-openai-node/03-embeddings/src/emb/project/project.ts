import { OpenAI } from "openai";
import { encoding_for_model } from "tiktoken";

const model = 'gpt-3.5-turbo';
const MAX_TOKENS = 600;

const openai = new OpenAI();
const encoder = encoding_for_model(model);

const context:OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [{
    role: 'system',
    content: 'You are a very helpful chatbot'
}];

async function createchatCompletion(){
    const response = await openai.chat.completions.create({
        model: model,
        messages: context
    });

    const responseMessage = response.choices[0].message;
    context.push(responseMessage);

    if( response.usage && response.usage.total_tokens > MAX_TOKENS ){
        deleteOlderMessages();
    }

    console.log(`${ response.choices[0].message.role }: ${ response.choices[0].message.content }`);    
}

process.stdin.addListener( 'data', async ( input ) => {
    const userInput = input.toString().trim();

    context.push({
        role: 'user',
        content: userInput
    });

    await createchatCompletion();
});

const deleteOlderMessages = () => {
    let contextLenght = getContextLenght();

    while( contextLenght > MAX_TOKENS ){
        for( let i = 0; i < context.length; i++ ){
            if( context[i].role != 'system' ){
                context.splice(i, 1);
                contextLenght = getContextLenght();
                console.log( 'New context length', contextLenght );
                break;
            }
        }
    }
};

const getContextLenght = () => {
    let lenght = 0;

    context.forEach( ( message ) => {
        
        if( typeof message.content == 'string' ){
            lenght += encoder.encode( message.content ).length;
        } else if (Array.isArray(message.content)){
            message.content.forEach( (messageContent) => {
                if( messageContent.type == 'text' ){
                    lenght += encoder.encode( messageContent.text ).length;
                }
            })
        }

    });

    console.log('Length: ', lenght);
    return lenght;
}
