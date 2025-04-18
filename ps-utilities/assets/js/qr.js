
// let img = ""; // mandreaqr.jpg
let canvas = new Object( { name: '' } );
let qrSize = 0;
let qrCodeCanvas = new QRCodeStyling({});
let selectedLogo = null;

const generateQRCode = ( imageName, qrUrl, size, img ) => {

    // console.log("esto trae img", `/../qr/${img}`);

    canvas.name = imageName;
    qrCodeCanvas._options.data = qrUrl;

    size ? qrSize = 1000 : qrSize = 400;

    qrCodeCanvas = new QRCodeStyling({
        width: qrSize,
        height: qrSize,
        data: qrUrl,
        image: `assets/img/qr/${img}`,
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

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".dropdown-item");
  const button = document.getElementById("qrLogo");

  items.forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      selectedLogo = this.dataset.value; 
      button.textContent = this.textContent;
    });
  });
});