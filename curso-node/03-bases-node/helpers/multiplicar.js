
const fs = require('fs');
const colors = require('colors');

const generaTxtTabla = async (base = 1, list) => {

    console.clear();

    try {
        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
        }

        if (list) {
            console.log('===================================' .rainbow);
            console.log(`=========== Tabla del ${base} ===========` .brightCyan);
            console.log('===================================' .rainbow);
            console.log(salida);
        }

        // fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;

        //     console.log('Archivo se guardó correctamente.');
        // });

        await fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

};

module.exports = {
    generaTxtTabla
}