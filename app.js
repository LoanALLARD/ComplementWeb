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
O_p.textContent = setInterval(() => {
    let I_value = getRandomIntIntoArray(A_temperatureValues);

    // Attribution de la classe selon la valeur
    if (I_value < 0 && I_value > -10) {
        O_div.setAttribute("class", "blue-class");
    } else if (I_value >= 0 && I_value < 20) {
        O_div.setAttribute("class", "red-class");
    } else if (I_value >= 20 && I_value < 40) {
        O_div.setAttribute("class", "orange-class");
    } else {
        O_div.setAttribute("class", "green-class");
    }

    // Attribution du message selon la valeur
    if (I_value > 30) {
        O_p1.textContent = "Caliente ! Vamos a la playa, ho hohohoho !!";
    } else if (I_value < 0) {
        O_p1.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
    } else {
        O_p1.textContent = "";
    }

    O_p.textContent = I_value;
}, 2000);
