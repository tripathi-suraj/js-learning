// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
console.log('console', {} + []);

function a() {
  return `Hello`;
}
var sent = a('hi');
console.log(sent);

//this keyword?

if (true) {
  var x = 5;
}
if (true) {
  let b = 5;
}

//console.log(x, b);
console.log(x(5));
var x = (a) => {
  return;
  a;
};

var a = [1, 'hello', 'Test'];

console.log(x(5), a);
x(5);
var x = function (a) {
  return;
  a;
};
