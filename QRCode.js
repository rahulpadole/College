document.addEventListener("DOMContentLoaded", function() {
    const qrContainers = document.querySelectorAll(".qr");

    qrContainers.forEach(container => {
        const qr = new QRCode(container, {
            text: container.dataset.url,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        const title = document.createElement("h2");
        title.textContent = container.dataset.title;
        container.prepend(title);
    });
});
