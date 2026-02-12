
// EXERCICE 1 – Tableau d'étudiants

const etudiants = [
  { id: 1, nom: "Rakoto", filiere: "GL", moyenne: 12 },
  { id: 2, nom: "Rabe", filiere: "GL", moyenne: 9 },
  { id: 3, nom: "Rasoa", filiere: "GL", moyenne: 14 },
  { id: 4, nom: "Rija", filiere: "GL", moyenne: 8 }
];

// 1. Afficher le nom de tous les étudiants
console.log("=== Noms de tous les étudiants ===");
etudiants.forEach(etudiant => {
  console.log(etudiant.nom);
});

// 2. Utiliser la destructuration pour extraire nom et moyenne
console.log("\n=== Destructuration (nom et moyenne) ===");
etudiants.forEach(({ nom, moyenne }) => {
  console.log(`${nom} : ${moyenne}`);
});



// EXERCICE 2– Manipulation des tableaux
// 1. Utiliser filter() pour afficher les étudiants ayant une moyenne ≥ 10
console.log("\n=== Étudiants avec moyenne ≥ 10 (filter) ===");
const admis = etudiants.filter(e => e.moyenne >= 10);
console.log(admis);

// 2. Utiliser map() pour créer un tableau contenant uniquement les noms
console.log("\n=== Noms uniquement (map) ===");
const noms = etudiants.map(e => e.nom);
console.log(noms);

// 3. Ajouter 1 point à toutes les moyennes (sans modifier le tableau original)
console.log("\n=== Moyennes + 1 point (map) ===");
const etudiantsAugmentes = etudiants.map(e => ({
  ...e,
  moyenne: e.moyenne + 1
}));
console.log("Tableau original :", etudiants);
console.log("Tableau avec +1 :", etudiantsAugmentes);



// EXERCICE 3 – Fonctions fléchées et template literals
// 1. Créer une fonction fléchée afficherEtudiant(etudiant)
const afficherEtudiant = (etudiant) => {
  console.log(`L'étudiant ${etudiant.nom} de la filière ${etudiant.filiere} a une moyenne de ${etudiant.moyenne}`);
};

// 2. Afficher pour chaque étudiant
console.log("\n=== Affichage de chaque étudiant ===");
etudiants.forEach(afficherEtudiant);



// EXERCICE 4 – Programmation asynchrone (async / await)
// Fonction qui simule un appel à une API distante
function chargerEtudiants() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(etudiants);
    }, 2000);
  });
}

// Fonction async pour récupérer et afficher les étudiants
const afficherEtudiantsAsync = async () => {
  try {
    console.log("\n=== Chargement des étudiants (async/await) ===");
    console.log("Chargement en cours...");
    const etudiantsCharges = await chargerEtudiants();
    console.log("Chargement terminé !");
    console.log(etudiantsCharges);
  } catch (erreur) {
    console.error("Erreur lors du chargement :", erreur.message);
  }
};

// Appeler la fonction async
afficherEtudiantsAsync();



// EXERCICE 5 – Moyenne générale avec reduce()
console.log("\n=== Moyenne générale de la classe ===");
const moyenneGenerale = etudiants.reduce((acc, etudiant) => acc + etudiant.moyenne, 0) / etudiants.length;
console.log(`Moyenne générale : ${moyenneGenerale.toFixed(2)}`);