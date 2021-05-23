const name = ['nemo'];

const findNemo = (array) => {
  const t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!!');
    }
  }

  const t1 = performance.now();

  console.log('Total Time Taken: ', t1 - t0 + 'ms');
};

findNemo(name);
