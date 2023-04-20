

let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    division() {
        if(this.a > this.b) {
            return this.a / this.b;
        }
        return this.b / this.a
    },
    subtraction() {
        return this.a - this.b;
    },
    read(a,b) {
        this.a = a;
        this.b = b;
    }
}

calculator.read(5,10);
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator.division());
console.log(calculator.subtraction());