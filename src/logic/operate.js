import Big from 'big.js';

function performOperation(one, two, operation) {
  switch (operation) {
    case '+':
      return one.plus(two).toString();
    case '-':
      return one.minus(two).toString();
    case 'x':
      return one.times(two).toString();
    case '÷':
      try {
        return one.div(two).toString();
      } catch (err) {
        return "Can't divide by 0.";
      }
    case '%':
      try {
        return one.mod(two).toString();
      } catch (err) {
        return "Can't find modulo as can't divide by 0.";
      }
    default:
      throw Error(`Unknown operation '${operation}'`);
  }
}

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  return performOperation(one, two, operation);
}
