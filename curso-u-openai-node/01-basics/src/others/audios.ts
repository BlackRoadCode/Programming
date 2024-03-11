import { OpenAI } from "openai";
import { writeFileSync, createReadStream } from "fs";

const openai = new OpenAI();

const createTranscription = async () => {
    const response = await openai.audio.transcriptions.create({
        file: createReadStream('./src/audios/audio-demo.mp3'),
        model: "whisper-1",
        language: "es"
    });

    console.log(response);
}

const transtale = async () => {
    const response = await openai.audio.translations.create({
        file: createReadStream('./src/audios/audio-demo.mp3'),
        model: "whisper-1",
    });

    console.log(response);
}

const textToSpeech = async () => {

    const response = await openai.audio.speech.create({
        input: 'Creo que la única forma de enviar un audio es grabarlo con el WhatsApp y luego pasarlo para la compu. No sé si lo voy a tener que pasar a MP3 o con el formato que sale de aquí es suficiente. Y está bueno porque voy a ver si traduce o interpreta bien el español.',
        model: 'tts-1',
        voice: 'alloy',
        response_format: 'mp3'
    });

    const buffer = Buffer.from( await response.arrayBuffer() );
    writeFileSync('./src/audios/audio-from-text.mp3', buffer);

}

// createTranscription();
// transtale();
textToSpeech();