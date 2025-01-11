class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue; // Ініціалізуємо приватну властивість
  }

  getValue() {
    return this.#value; // Повертаємо поточне значення
  }

  padEnd(str) {
    this.#value += str; // Додаємо рядок у кінець
  }

  padStart(str) {
    this.#value = str + this.#value; // Додаємо рядок на початок
  }

  padBoth(str) {
    this.#value = str + this.#value + str; // Додаємо рядок на початок і в кінець
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
