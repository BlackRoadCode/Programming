import { join } from "path";
import { OpenAI } from "openai";
import { readFileSync, writeFileSync } from "fs";

const openai = new OpenAI();

export type DataWithEmbeddings = {
    input:string,
    embedding:number[]
}

export const generateEmbeddings = async ( input:string | string[] ) => {
    const response = await openai.embeddings.create({
        input:input,
        model:'text-embedding-3-small',
    });

    // console.log( response.data[0].embedding );
    return response;
}

export const loadJSONData = <T>( filename:string ):T => {
    const path = join(__dirname, filename);
    const rawData = readFileSync(path, 'utf-8');
    return JSON.parse(rawData.toString());
}

const saveDataToJSONFile = ( data:any, fileName:string ) => {
    const dataString = JSON.stringify(data);
    const dataBuffer = Buffer.from(dataString);
    const path = join(__dirname, fileName);
    writeFileSync(path, dataBuffer);
    console.log(`saved data to ${ fileName }`);

}

const main = async () => {
    const data = loadJSONData<string[]>('data2.json');
    const embeddings = await generateEmbeddings(data);
    const dataWithEmbeddings:DataWithEmbeddings[] = [];
    for( let i = 0; i < data.length; i++ ){
        dataWithEmbeddings.push({
            input:data[i],
            embedding:embeddings.data[i].embedding
        });
    }

    saveDataToJSONFile(dataWithEmbeddings, 'dataWithEmbeddings2.json');
}

main();