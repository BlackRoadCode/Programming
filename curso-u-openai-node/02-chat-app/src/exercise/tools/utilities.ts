import OpenAI from "openai";
import { encoding_for_model } from "tiktoken";
const model = 'gpt-3.5-turbo-0613';
const encoder = encoding_for_model(model);

const deleteOlderMessages = ( context: OpenAI.Chat.Completions.ChatCompletionMessageParam[], MAX_TOKENS:number ) => {
    let contextLenght = getContextLenght(context);

    while( contextLenght > MAX_TOKENS ){
        for( let i = 0; i < context.length; i++ ){
            if( context[i].role != 'system' ){
                context.splice(i, 1);
                contextLenght = getContextLenght( context );
                console.log( 'New context length', contextLenght );
                break;
            }
        }
    }
};

const getContextLenght = ( context: OpenAI.Chat.Completions.ChatCompletionMessageParam[] ) => {
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

    return lenght;
}

export { 
    deleteOlderMessages,
    model
};