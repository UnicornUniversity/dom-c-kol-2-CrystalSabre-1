export function permittedInputSystems() {
  return [10];
}

export function permittedOutputSystems() {
  return [2];
}

export function main(inputNumber, inputSystem, outputSystem) {
  let n = Number(inputNumber);

  if (isNaN(n) || n < 0) {
    return null;
  }

  if (n === 0) {
    return "0";
  }

  let result = "";

  while (n > 0) {
    let remainder = n % 2;
    result = remainder + result;
    n = Math.floor(n / 2);
  }

  return result;
}
