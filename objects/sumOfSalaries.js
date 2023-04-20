let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Misha: 210
}

let sum = 0;
for(let key in salaries) {
    console.log(salaries[key]);
    sum += salaries[key]
}
console.log(sum);