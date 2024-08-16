class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    // Method to add two complex numbers
    add(other) {
        return new ComplexNumber(
            this.real + other.real,
            this.imaginary + other.imaginary
        );
    }

    // Method to multiply two complex numbers
    multiply(other) {
        const realPart = this.real * other.real - this.imaginary * other.imaginary;
        const imaginaryPart = this.real * other.imaginary + this.imaginary * other.real;
        return new ComplexNumber(realPart, imaginaryPart);
    }

    // Method to display the complex number as a string
    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}

// Example usage:
const num1 = new ComplexNumber(3, 4);
const num2 = new ComplexNumber(1, 2);

const sum = num1.add(num2);
const product = num1.multiply(num2);

console.log(`Sum: ${sum.toString()}`);        // Output: Sum: 4 + 6i
console.log(`Product: ${product.toString()}`); // Output: Product: -5 + 10i
