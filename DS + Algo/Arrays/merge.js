const mergeArray = (array1, array2) => {
  const mergedArray = [];
  let arrayItem1 = array1[0];
  let arrayItem2 = array2[0];
  let i = 1;
  let j = 1;

  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  while (arrayItem1 || arrayItem2) {
    if (arrayItem2 === undefined || arrayItem1 < arrayItem2) {
      mergedArray.push(arrayItem1);
      arrayItem1 = array1[i];
      i++;
    } else {
      mergedArray.push(arrayItem2);
      arrayItem2 = array2[j];
      j++;
    }
  }

  return mergedArray;
};

console.log(mergeArray([0, 3, 5], [2, 4]));
