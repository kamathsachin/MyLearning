const reverse = (str) => {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Check Input Parameter';
  }

  const backward = [];
  const totalItem = str.length - 1;

  for (let i = totalItem; i >= 0; i--) {
    backward.push(str[i]);
  }

  console.log(backward.join(''));
};

reverse('Hello!! My name is Sachin');
