import { OpenAI } from "openai";
import { encoding_for_model } from "tiktoken";

const openai = new OpenAI({});

async function main(){
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: 'system',
                content: 'You respond like a cool bro'
            },
            {
                role: 'user',
                content: 'Who tall is michael jordan'
            }
        ],
        max_tokens: 100,
        n:1,
        frequency_penalty: 1.5,
        seed: 555
    });

    console.log(response);
    console.log(response.choices[0].message);
    console.log(response.choices[0].message.content);
}

function encodePrompt(){

    const prompt = 'How tall is the mount kilimanjaro';
    const encoder = encoding_for_model("gpt-3.5-turbo");
    const words = encoder.encode(prompt);

    console.log(words);    

}

main();
// encodePrompt();