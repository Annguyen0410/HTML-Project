function generateQR() {
    // Generate a random YouTube video ID
    let videoId = generateRandomVideoId();
    let videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    // Generate QR code
    let qrcode = new QRCode(document.getElementById("qrcode"), {
        text: videoUrl,
        width: 300,
        height: 300
    });
}

function generateRandomVideoId() {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    let videoId = "";
    for (let i = 0; i < 11; i++) {
        videoId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return videoId;
}
