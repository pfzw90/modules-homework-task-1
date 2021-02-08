const test = document.createElement('div');
test.innerText = 'app worked';
document.body.insertAdjacentElement('afterbegin', test);
console.log('app worked')