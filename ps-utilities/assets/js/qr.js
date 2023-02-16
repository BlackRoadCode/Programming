// Imágenes disponibles
let img = "assets/img/mandreaqr2.png"; // mandreaqr.jpg

const canvas1 = new Object({ name: 'MX_Lanzamiento_Paquetes' });
const canvas2 = new Object({ name: '' });
const canvas3 = new Object({ name: '' });
const canvas4 = new Object({ name: '' });

/********** Variables URL's **********/
let url_1 = "https://mx.andrea.com/lanzamiento-paquetes";
let url_2 = "";
let url_3 = "";
let url_4 = "";

/********** Objetos qrCode **********/
const qrCodeCanvas1 = new QRCodeStyling({
    width: 400,
    height: 400,
    data: url_1,
    image: img,
    qrOptions: {
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "Q"
    },
    dotsOptions: {
        color: "#000",
        type: "square"
    },
    cornersSquareOptions: {
        color: "#000",
        type: "square"
    },
    backgroundOptions: {
        color: "#fff",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 0
    }
});
const qrCodeCanvas2 = new QRCodeStyling({
    width: 400,
    height: 400,
    data: url_2,
    image: img,
    qrOptions: {
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "Q"
    },
    dotsOptions: {
        color: "#000",
        type: "square"
    },
    cornersSquareOptions: {
        color: "#000",
        type: "square"
    },
    backgroundOptions: {
        color: "#fff",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 0
    }
});
const qrCodeCanvas3 = new QRCodeStyling({
    width: 400,
    height: 400,
    data: url_3,
    image: img,
    qrOptions: {
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "Q"
    },
    dotsOptions: {
        color: "#000",
        type: "square"
    },
    cornersSquareOptions: {
        color: "#000",
        type: "square"
    },
    backgroundOptions: {
        color: "#fff",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 0
    }
});
const qrCodeCanvas4 = new QRCodeStyling({
    width: 400,
    height: 400,
    data: url_4,
    image: img,
    qrOptions: {
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "Q"
    },
    dotsOptions: {
        color: "#000",
        type: "square"
    },
    cornersSquareOptions: {
        color: "#000",
        type: "square"
    },
    backgroundOptions: {
        color: "#fff",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 0
    }
});

qrCodeCanvas1.append(document.getElementById("canvas1"));
// qrCodeCanvas2.append(document.getElementById("canvas2"));
// qrCodeCanvas3.append(document.getElementById("canvas3"));
// qrCodeCanvas4.append(document.getElementById("canvas4"));

function downloadQRCodes() {
    qrCodeCanvas1.download(canvas1);
    // qrCodeCanvas2.download(canvas2);
    // qrCodeCanvas3.download(canvas3);
    // qrCodeCanvas4.download(canvas4);
}