function printPattern(n) {
    for (let i = 5; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(" *");
        }
        console.log(" ")
    }
}

// Example usage:
printPattern(5);
