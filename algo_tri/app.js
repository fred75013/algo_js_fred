const fs = require("fs");
const fileName = process.argv[2];

//Methode creer un  array
const createArrayData = (data) => {
  return data.split(" ").map((string) => parseInt(string, 10));
};

// Méthode bubbleSort
let countBubble = 0;
let bubbleSort = (inputArr) => {
  let len = inputArr.length; //mesure la longueur de l'array
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      countBubble++;
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j]; //stock temporairement data
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};

// Méthode insertionSort
let countInsertion = 0;
const insertionSort = (inputArr) => {
  for (let i = 1; i < inputArr.length; i++) {
    let j = i - 1;
    let tmp = inputArr[i];
    while (j >= 0 && inputArr[j] > tmp) {
      countInsertion++;
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = tmp;
  }
  return inputArr;
};

// Méthode selectionSort
let countSelection = 0;
const selectionSort = (inputArray) => {
  for (var i = 0; i < inputArray.length; i++) {
    //stocker l'index de l'élément minimum
    var min = i;
    for (var j = i + 1; j < inputArray.length; j++) {
      countSelection++;
      if (inputArray[j] < inputArray[min]) {
        // mettre à jour l'index de l'élément minimum
        min = j;
      }
    }
    var tmp = inputArray[i];
    inputArray[i] = inputArray[min];
    inputArray[min] = tmp;
  }
  return inputArray;
};

// Méthode quick mise en place

//swap
const swap = (arr, leftIndex, rightIndex) => {
  let temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
};

//partition

const partition = (arr, left, right) => {
  let pivot = arr[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j); //sawpping two elements
      i++;
      j--;
    }
  }

  return i;
};

// Méthode quickSortRecursive
let countQuick = 0;
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  let index;

  if (arr.length > 1) {
    countQuick++;
    index = partition(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
};

/* **********************************ALGO TRI SUITE*************************************** */

// Méthode fusionSort

const merge = (left, right) => {
  let tab = [],
    l = 0,
    r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      tab.push(left[l++]);
    } else {
      tab.push(right[r++]);
    }
  }
  return tab.concat(left.slice(l)).concat(right.slice(r));
};
let countFusion = 0;
const fusionSort = (inputArray) => {
  if (inputArray.length < 2) {
    countFusion++;
    return inputArray;
  }
  let mid = Math.floor(inputArray.length / 2),
    right = inputArray.slice(mid),
    left = inputArray.slice(0, mid),
    p = merge(fusionSort(left), fusionSort(right));

  p.unshift(0, inputArray.length);
  inputArray.splice.apply(inputArray, p);
  return inputArray;
};

/* **********************************ALGO TRI SUITE*************************************** */
fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  const arrayBubble = createArrayData(data);
  bubbleSort(arrayBubble);
  console.log(`Tri bubble: ${countBubble} comparaisons - [${arrayBubble}]`);

  const arrayInsertion = createArrayData(data);
  insertionSort(arrayInsertion);
  console.log(
    `Tri insertion: ${countInsertion} comparaisons - [${arrayInsertion}]`
  );

  const arraySelection = createArrayData(data);
  selectionSort(arraySelection);
  console.log(
    `Tri selection: ${countSelection} comparaisons - [${arraySelection}]`
  );

  const arrayQuick = createArrayData(data);
  quickSort(arrayQuick);
  console.log(`Tri rapide: ${countQuick} comparaisons - [${arrayQuick}]`);

  /* **********************************ALGO TRI SUITE*************************************** */

  const arrayFusion = createArrayData(data);
  fusionSort(arrayFusion);
  console.log(`Tri fusion: ${countFusion} comparaisons - [${arrayFusion}]`);
});
