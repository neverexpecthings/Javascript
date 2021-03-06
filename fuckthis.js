class Matrix {
  constructor(
    width,
    height,
    content = () => {
      undefined;
    }
  ) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = content(x, y);
      }
    }
  }
  get(x, y) {
    return this.content[y * this.width + x];
  }

  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

// let matrix = new Matrix(3, 2);

// matrix.set(0, 0, "picha");
// matrix.set(2, 1, "Locas");

class MatrixIterator {
  constructor(matrix) {
    this.y = 0;
    this.x = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y === this.matrix.height) return { done: true };

    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };
    this.x++;
    if (this.x === this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

const matrix = new Matrix(7, 8, (x, y) => Math.random());
for (let { x, y, value } of matrix) {
  console.log(x, y, value);
}
