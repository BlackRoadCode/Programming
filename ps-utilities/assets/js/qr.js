
let img = "assets/img/mandreaqr2.png"; // mandreaqr.jpg
let canvas = new Object( { name: '' } );
let qrSize = 0;
let qrCodeCanvas = new QRCodeStyling({});

const generateQRCode = ( imageName, qrUrl, size ) => {
    canvas.name = imageName;
    qrCodeCanvas._options.data = qrUrl;

    size ? qrSize = 1000 : qrSize = 400;

    qrCodeCanvas = new QRCodeStyling({
        width: qrSize,
        height: qrSize,
        data: qrUrl,
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

    qrCodeCanvas.append( document.getElementById("canvas") );
}

const downloadQRCodes = () => {
    qrCodeCanvas.download(canvas);
}