const villains = ['Voldemort', 'Malfoy', 'Bellatrix', 'Fudge'];
[villains[1], villains[2]] = [villains[2], villains[1]];
console.log(...villains);

const sum = (a, b) => {
    a + b;
};

console.log(sum(4, 4));

class Person {}
console.log(typeof Person);
