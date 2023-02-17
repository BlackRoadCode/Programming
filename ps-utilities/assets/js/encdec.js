// An example 128-bit key (16 bytes * 8 bits/byte = 128 bits)
// https://github.com/ricmoo/aes-js?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library
let key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

const encryptText = ( inputText ) => {
    // Convert text to bytes
    let text = inputText;
    let textBytes = aesjs.utils.utf8.toBytes(text);
    
    // The counter is optional, and if omitted will begin at 1
    let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    let encryptedBytes = aesCtr.encrypt(textBytes);
    
    // To print or store the binary data, you may convert it to hex
    let encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

    let resultLabel = document.getElementById('result');
    let p = document.createElement("p")
    p.classList.add('lead', 'text-break');
    p.append(encryptedHex);
    resultLabel.append(p);
}

const decryptText = ( encryptedText ) => {
    // When ready to decrypt the hex string, convert it back to bytes

    let trimmText = encryptedText.trim();

    let encryptedBytes = aesjs.utils.hex.toBytes(trimmText);

    // The counter mode of operation maintains internal state, so to
    // decrypt a new instance must be instantiated.
    let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    let decryptedBytes = aesCtr.decrypt(encryptedBytes);
    
    // Convert our bytes back into text
    let decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    
    let resultLabel = document.getElementById('resultdecrypt');
    let p = document.createElement("p")
    p.classList.add('lead', 'text-break');
    p.append(decryptedText);
    resultLabel.append(p);
}
