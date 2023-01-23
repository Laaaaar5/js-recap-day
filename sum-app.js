class SumApp {
  constructor() {
    this.numbers = [];
  }
  addNumber(n) {
    this.numbers.push(n);
  }
  getSum() {
    let sum = 0;
    this.numbers.forEach((number) => (sum += number));
    return sum;
  }
  reset() {
    this.numbers = [];
  }
}
