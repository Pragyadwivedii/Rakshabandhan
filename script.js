function openSurprise() {

    // Welcome screen hide
    document.getElementById("welcome").classList.add("hide");

    // Surprise show
    document.getElementById("surprise").classList.add("show");

    // Flowers start
    createFlowers();
}


function createFlowers() {

    const flowers = ["🌸", "🌷", "🌺", "🌼", "💮"];

    for (let i = 0; i < 25; i++) {

        const flower = document.createElement("div");

        flower.classList.add("falling-flower");

        flower.innerHTML =
            flowers[Math.floor(Math.random() * flowers.length)];

        flower.style.left = Math.random() * 100 + "vw";

        flower.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        flower.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 8000);
    }
}