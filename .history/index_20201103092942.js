function primeNumber(pvalue) {
    for (i = 2; i < pvaluenum; i++) {
        if (pvalue % i === 0)
            return false;
    }

    return true
}

console.log(primeNumber(3));

// create a for loop with incrementing the value
// make a conditional