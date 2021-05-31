const strings = ['a', 'b', 'c', 'd'];

//O(1)
strings.push('e');
console.log('After Push: ', strings);

//O(1)
strings.pop();
console.log('After Pop: ', strings);

//O(n)
strings.unshift('x');
console.log('After Unshift: ', strings);

//O(n)
strings.splice(2, 1, 'Alien');
console.log('After Splice: ', strings);
