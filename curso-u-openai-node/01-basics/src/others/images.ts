import { OpenAI } from "openai";
import { writeFileSync, createReadStream } from "fs";

const openai = new OpenAI();

const generateFreeImage = async () => {

    const response = await openai.images.generate({
        prompt:'Un super héroe mexicano',
        model: 'dall-e-2',
        style:'vivid',
        size:'512x512',
        quality:'standard',
        n:1
    });

    console.log(response);

}

const generateFreeLocalImage = async () => {

    const response = await openai.images.generate({
        prompt:'Un super héroe mexicano',
        model: 'dall-e-2',
        style:'vivid',
        size:'512x512',
        quality:'standard',
        n:1,
        response_format: 'b64_json'
    });

    const rawImage = response.data[0].b64_json;

    if(rawImage){
        writeFileSync('./src/images/image.png', Buffer.from(rawImage, 'base64'));
    }

}

const generateAdvancedImage = async () =>{

    const response = await openai.images.generate({
        // prompt:'LA escena de LOTR en donde frodo pelea contra ella, la araña',
        prompt:'Un super héroe mexicano',
        model: 'dall-e-3',
        quality:'hd',
        size:'1024x1024',
        response_format:'b64_json',
        n:1,
    });

    const rawImage = response.data[0].b64_json;

    if(rawImage){
        writeFileSync('./src/images/super_mexa_dalle-3.png', Buffer.from(rawImage, 'base64'));
    }

}

const generateImageVariation = async () =>{

    const response = await openai.images.createVariation({
        image: createReadStream('./src/images/super_mexa_dalle-3.png'),
        model: 'dall-e-2',
        response_format:'b64_json',
        n:1,
    });

    const rawImage = response.data[0].b64_json;

    if(rawImage){
        writeFileSync('./src/images/super_mexa_dalle_3_variation.png', Buffer.from(rawImage, 'base64'));
    }

}

const editImage = async () => {

    const response = openai.images.edit({
        image: createReadStream('./src/images/super_mexa_dalle-3.png'),
        mask: createReadStream('./src/images/super_mexa_dalle-3_mask.png'),
        prompt: 'Elimina las naves del cielo y las banderas decorativas',
        model:'dall-e-2',
        response_format:'b64_json'
    })

    const rawImage = (await response).data[0].b64_json;

    if(rawImage){
        writeFileSync('./src/images/super_mexa_dalle_3_edited.png', Buffer.from(rawImage, 'base64'));
    }

}

// generateFreeImage();
// generateFreeLocalImage();
// generateAdvancedImage();
// generateImageVariation();
// editImage();