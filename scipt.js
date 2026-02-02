window.onload = function () {
    displayGif("gif-start.gif", "GIF initial");
};

// Gestion des boutons
function selectOption(option) {
    if (option === "no") {
        displayGif("gif-no.gif", "GIF No");
        growYesButton();
        moveNoButton();
        document.getElementById("no-button").innerText = "Please petit cœur ?";
    }

    if (option === "yes") {
        displayGif("gif-yes.gif", "GIF Yes");
        document.getElementById("options").style.display = "none";
        startRainbowBackground();
        heartRain();
    }
}

// Affichage des GIF
function displayGif(src, alt) {
    const container = document.getElementById("image-container");
    container.innerHTML = "";

    const img = new Image();
    img.src = src;
    img.alt = alt;
    img.classList.add("gif-anim");

    img.onload = () => container.appendChild(img);
}

// YES grossit
function growYesButton() {
    const yes = document.getElementById("yes-button");
    const size = parseFloat(getComputedStyle(yes).fontSize);
    yes.style.fontSize = (size * 1.4) + "px";
}

// NO s’enfuit 😈
function moveNoButton() {
    const no = document.getElementById("no-button");
    no.style.position = "absolute";
    no.style.left = Math.random() * 80 + "vw";
    no.style.top = Math.random() * 80 + "vh";
}

// Fond arc-en-ciel 🌈
function startRainbowBackground() {
    const colors = ["#ffb6c1", "#ff69b4", "#ffc0cb", "#dda0dd", "#add8e6"];
    let i = 0;
    setInterval(() => {
        document.body.style.backgroundColor = colors[i % colors.length];
        i++;
    }, 300);
}

// Pluie de <3 💗
function heartRain() {
    for (let i = 0; i < 120; i++) {
        const heart = document.createElement("span");
        heart.innerText = "<3";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
        heart.style.fontSize = (Math.random() * 20 + 12) + "px";
        document.body.appendChild(heart);
    }
}
