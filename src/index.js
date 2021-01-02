import './style.css';

const newyear = 2021;

console.log(`Hello ${newyear} yopo`);

const isBabel = !(class {}.toString().indexOf('class ') === 0);
console.log(isBabel);
