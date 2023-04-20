function Calculator(a,b) {
    this.a = a;
    this.b = b;
    this.sum = function () {
        return this.a + this.b;
    }
    this.mul = function () {
        return this.a * this.b;
    }
    this.division = function () {
        if(this.a < this.b) {
            return this.b / this.a;
        }
        return this.a / this.b;
    }
    this.subtraction = function () {
        return this.a - this.b;
    }
}

let calculator = new Calculator(20,10);
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator.division());
console.log(calculator.subtraction());