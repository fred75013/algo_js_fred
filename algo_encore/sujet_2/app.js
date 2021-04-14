/*Sujet 2
Nous allons te donner une liste contenant la hauteur (en étages) 
d'immeubles appartenant à une rue, d'est en ouest. 
Un agent immobilier voudrait que tu écrives un algorithme qui retourne 
combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), 
afin de bien évaluer la valeur des bâtiments de la rue.

Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, 
puisque l'étage le plus haut des immeubles ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest. 
Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 puisque seul
 le dernier bâtiment a au moins un appartement avec une vue à l'ouest.*/

const fs = require("fs");
const fileName = process.argv[2];

//Methode creer un  array
const createArrayData = (data) => {
  return data.split(" ").map((string) => parseInt(string, 10));
};

/*Exercice 2
Résous le sujet 2 avec une complexité algorithmique de O(n²),
c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.*/

let bubbleSort = (inputArr) => {
  let count = 0;
  let max = -1;
  let n = inputArr.length;
  for (let i = max + 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] > inputArr[i]) {
        max = j;
        i = max;
      }
    }
    count++;
  }
  return count;
};

/*Exercice 4
Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !). */

const exo4 = (array) => {
  let buildings = [...array];
  let count = 1;
  let j = buildings[buildings.length - 1];

  for (let i = buildings.length - 2; i >= 0; i--) {
    if (buildings[i] < j) {
      count;
    } else {
      j = buildings[i];
      count++;
    }
  }
  return count;
};

/* Exercice 6
Résous le sujet 2 en ne faisant qu'un seul passage sur ta liste.
Si tu réussis cet exercice, sache qu'il a été posé en entretien par Mailchimp. Tu peux postuler à Mailchimp. La classe, non ?*/

const exo6 = (buildings) => {
  let lastMaxStages = 0;
  let BuildingsWithSunsetView = [];
  buildings.reverse().filter((stages) => {
    if (stages > lastMaxStages) {
      BuildingsWithSunsetView.push(stages);
      lastMaxStages = stages;
    }
  });
  return BuildingsWithSunsetView.reverse().length;
};

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  const arrayExo2 = createArrayData(data);
  console.log("Exercice 2 :");
  console.log(bubbleSort(arrayExo2));

  const arrayExo4 = createArrayData(data);
  console.log("Exercice 4 :");
  console.log(exo4(arrayExo4));

  const arrayExo6 = createArrayData(data);
  console.log("Exercice 6 :");
  console.log(exo6(arrayExo6));
});
