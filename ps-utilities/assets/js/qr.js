
let img = "assets/img/mandreaqr2.png"; // mandreaqr.jpg
let canvas = new Object( { name: '' } );
let qrCodeCanvas = new QRCodeStyling({});

const generateQRCode = ( imageName, qrUrl ) => {
    canvas.name = imageName;
    qrCodeCanvas._options.data = qrUrl;

    qrCodeCanvas = new QRCodeStyling({
        width: 400,
        height: 400,
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