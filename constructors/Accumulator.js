function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += 2;
    }
}

let accumulator = new Accumulator(2);
accumulator.read();
accumulator.read();
console.log(accumulator.value);