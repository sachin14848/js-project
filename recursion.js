function print(i) {
    if (i >= 5) {
        return 0;
    }

    const sum = i + print(i + 1);

    return sum;
}

console.log(print(1));

function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    const sum = fibonacci(n - 1) + fibonacci(n - 2);
    return sum;
}

console.log(fibonacci(6));  

function printfibonacci(n) {
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }
}

printfibonacci(6);


const result = [];
function Permutation(str, prefix = "")  {
    if (str.length === 0) { 
        result.push(prefix);
    }

    const newPrefix = prefix + str[i];
    Permutation(str.slice(0, i) + str.slice(i + 1), newPrefix);    
}