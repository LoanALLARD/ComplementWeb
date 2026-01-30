// Définition du tableau
let A_temperatureValues = [];

// Génère 1 entier aléatoire compris entre 'min' et 'max'
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

// Génère un nimbre d'entiers 'iterations' dans A_temperatureValues
function generateInts(iterations) {
    for (let I_i = 0; I_i < iterations; ++I_i) {
        A_temperatureValues[I_i] = random(-20, 40);
        console.log(A_temperatureValues[I_i]);
    }
}

// Appel de la fonction
generateInts(20);

// Récupère un entier aléatoire dans un tableau 'array'
function getRandomIntIntoArray(array) {
    I_rand = random(0, 19);
    return array[I_rand];
}

// Récupération et création des différents éléments
let O_section1 = document.getElementById("section1");
let O_div = document.createElement("div");
let O_p = document.createElement("p");
let O_p1 = document.createElement("p");

// Ajoute les éléments enfants
O_div.appendChild(O_p1);
O_div.appendChild(O_p);
O_section1.appendChild(O_div);

// Change le contenu du <p> toutes les 2 secondes
O_p.textContent = ""; // Initialisation du contenu
setInterval(() => {
    let I_value = getRandomIntIntoArray(A_temperatureValues);

    // Mise à jour de la température affichée dans le carré
    O_p.textContent = `${I_value}°C`;

    // Attribution de la classe selon la valeur
    if (I_value >= -10 && I_value < 0) {
        O_div.setAttribute("class", "blue-class");
        O_p1.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
    } else if (I_value >= 0 && I_value < 20) {
        O_div.setAttribute("class", "green-class");
        O_p1.textContent = ""; // Efface le message précédent
    } else if (I_value >= 20 && I_value < 30) {
        O_div.setAttribute("class", "orange-class");
        O_p1.textContent = ""; // Efface le message précédent
    } else if (I_value >= 30 && I_value <= 40) {
        O_div.setAttribute("class", "red-class");
        O_p1.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
    }

    // Affichage de l'historique (ajout en bas de la liste)
    let O_history = document.getElementById("history");
    if (!O_history) {
        O_history = document.createElement("ul");
        O_history.id = "history";
        O_section1.appendChild(O_history);
    }
    let O_li = document.createElement("li");
    O_li.textContent = `${I_value}°C`;
    O_history.appendChild(O_li);
    O_history.scrollTop = O_history.scrollHeight; // Scroll automatique vers le bas
}, 2000);
