//* Create a Class Vector: 2D space. Take x and y (numbers) -Properties with the same name. Vec prototype tiene que tener par de methods "plus" and "minus". Return a new vector that has the sum or the difference of the two vectors. Add a getter property "length" of the vector, the distance of the point (x,y) from the origin.

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // get length() {}
}

const vector = new Vector(7, 2);

console.log(vector);
