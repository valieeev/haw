// let values = [100, 58, 15, 300, 20];
// let sum = 0;

// for (let i = 0; i < values.length; i++) {
//     sum += values[i];
// }

// console.log("Sum:", sum);

let values = [100, 55, 20];
let sum = 0;

for (let i = 0; i < values.length; i++) {
    console.log(`${sum} + ${values[i]} = ${sum + values[i]}`);
    sum += values[i];
}

console.log("Final Sum:", sum);
