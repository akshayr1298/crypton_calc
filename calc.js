const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculate = (operator, a, b) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }
};

const prompt = () => {
  rl.question("Enter an the numbers (e.g. 2 + 3): ", (input) => {
    try {
      const [a, operator, b] = input.split(" ");

      const numA = parseFloat(a);
      const numB = parseFloat(b);
      const result = calculate(operator, numA, numB);

      console.log(`${numA} ${operator} ${numB} is: ${result}\n`);
      prompt();
    } catch (err) {
      console.error(err.message);
      prompt();
    }
  });
};

prompt();
