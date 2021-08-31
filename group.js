/**
 *  ! Create a class name Group like "SET" has "add", "delete" and "has" methods
 *  * "add" add an element only if it's not already.
 *  * "delete" delete and element if it was there.
 *  * "has" check if an element exists. --> Boolean
 *  ? Give the class a static from method that takes an iteratable object as argument and creates a group that contains all the values produced by iterating over it.
 */

class Group {
  constructor() {
    this.content = [];
  }

  add(element) {
    if (this.content.indexOf(element) === -1) {
      this.content.push(element);
    }
  }

  delete(element) {
    for (var i = 0; i < this.content.length; i++) {
      if (this.content[i] === element) {
        this.content.splice(i, 1);
      }
    }
  }

  has(element) {
    this.content.indexOf(element) !== -1
      ? console.log(true)
      : console.log(false);
  }

  static from(iterable) {
    let set = new Group();

    for (const iterator of iterable) {
      set.add(iterator);
    }
    return set;
  }
}

let set = new Group();

let iterable = [1, 2, 3, 4, 4, 5];

let set2 = Group.from(iterable);

set.add("SET");
set.add("SET");
set.add("SET");
set.add("SET");
set.add("Emanuel");

set.delete("SET");
set.delete("SET");
set.add("SET");
set.has("SET");
set.has("get");
console.log(set);
console.log(set2);
