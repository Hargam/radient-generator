// Sélectionner les éléments HTML
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

// Mettre à jour le dégradé en fonction des couleurs choisies
function setGradient() {
    // Valider les entrées utilisateur avant de créer le dégradé
    if (isValidColor(color1.value) && isValidColor(color2.value)) {
        body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
        css.textContent = body.style.background + ";";
    }
}

// Vérifier si une couleur est valide (hexadécimal ou rgb)
function isValidColor(color) {
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const rgbRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
    return hexRegex.test(color) || rgbRegex.test(color);
}

// Mettre à jour le dégradé lorsqu'une couleur est modifiée
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Générer le dégradé initial sur la première page
window.addEventListener("load", setGradient);

// Générer deux nombres aléatoires pour les couleurs
function randomizeColors() {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();
    color1.value = randomColor1;
    color2.value = randomColor2;
    setGradient();
}

// Générer une couleur aléatoire en hexadécimal
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
