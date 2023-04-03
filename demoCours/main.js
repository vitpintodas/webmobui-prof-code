let currentReractiveCode = null;
let reactiveTask = [];

const x = {
  _value : 2,
  get value() {
    if (currentReractiveCode) {
      reactiveTask.push(currentReractiveCode);
    }
    currentReractiveCode = null;
    return this._value;
  },
  set value(value) {
    this._value = value;
    for (let i = 0; i < reactiveTask.length; i++) {
      reactiveTask[i]();
    }
    // clear
    // reactiveTask = [];
  }
};

let y = 0;

const reactiveY = () => y = x.value + 2;
currentReractiveCode = reactiveY;
reactiveY();

let z = 0;
const reactiveZ = () => z = x.value * 2;
currentReractiveCode = reactiveZ;
reactiveZ();




console.log(x.value, y, z); // 2
x.value = 3;
console.log(x.value, y, z); // 3
x.value = 4;
console.log(x.value, y, z); // 4

