const numbers = [2, 99, 6, 3, 100, 1, 4, 9, 8];

function bubbleSort(array) {
  const length = array.length;

  for (i = 0; i < length; i++) {
    for (j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
