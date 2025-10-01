console.log("Hello World");

// avant 2022
var prenom = "Malik";

// depuis 2022
let nom = "Dawan";

console.log(nom.length * 5);

// Type de variales

let a = 10; // Entier

let float = 4.35 // Nombre flottant

let chaine_de_caractere = "Bonjour"; // Chaine de caractere

// depuis 2022, on peux utiliser les backticks (alt gr + 7)

let paragraphe = `Je suis un paragraphe
sur plusieurs lignes`; // Chaine de caractere sur plusieurs lignes

console.log(paragraphe);

let paragraphe2 = `Je suis un paragraphe
sur plusieurs lignes
avec des espaces et avec ${float} dedans`; // Chaine de caractere sur plusieurs lignes

console.log(paragraphe2);

// Booléen

let bool = true; // ou false

// Tableaux

let array = [1, 2 ,3];

console.log(array);

let eleve = ["Malik", "Ibo", [4, 5, 6]];

console.log(eleve);

console.log(eleve[1]);
console.log(eleve[2][2]);

// Les objets

// une propiéter corespond à une variable intégrée dans un objet
// une méthode  == fonction intégrée dans un objet

let personne = {
  nom_de_famille: "Ibo",
  prenom: "Malik",
  age: 24,
  notes: [12, 15, 18],
  job: {
    title: "étidiant",
    company: "Dawan"
}
}

console.log(personne);
console.log(personne.notes[2]);
console.log(personne.job.company);

























