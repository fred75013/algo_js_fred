/*Avec une liste de nombres entiers relatifs et un nombre k, 
crée une méthode retournant un booléen qui affiche 
si deux nombres de cette liste ont k comme résultat de leur somme.

Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, 
la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, 
la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.
********************************************************************************************************/
const fs = require("fs");
const fileName = process.argv[2];

//Methode creer un  array
const createArrayData = (data) => {
  return data.split(" ").map((string) => parseInt(string, 10));
};

/*Exercice 1
Résous le sujet 1 avec une complexité algorithmique de O(n²), 
c'est-à-dire que ton programme devra comparer chaque élément 
entre eux à l'aide de 2 boucles imbriquées.*/

// Méthode bubbleSort

let exo1 = (inputArr, k) => {
  let len = inputArr.length; //mesure la longueur de l'array
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j]; //stock temporairement data
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
      if (inputArr[j] + inputArr[j + 1] === k) {
        return true;
      }
    }
  }
  return false;
};

/*Exercice 3
Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !). */
const exo3 = (array, num) => {
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    let searchingValue = num - currentNum;
    if (
      array.filter((num) => array.indexOf(num) !== i).includes(searchingValue)
    )
      return true;
  }
  return false;
};

/*Exercice 5
Résous le sujet 1 en ne faisant qu'un seul passage sur ta liste.
Si tu réussis cet exercice, sache qu'il a été posé en entretien par Google. Tu peux postuler à Google. La classe, non ?*/

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  const arrayExo1 = createArrayData(data);
  console.log("Exercice 1:");
  console.log(exo1(arrayExo1, 22));

  const arrayExo3 = createArrayData(data);
  console.log("Exercice 3:");
  console.log(exo3(arrayExo3, 6));
});
