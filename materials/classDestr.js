// class vs func

class AnimalClass {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }
  info(){
    console.log(`name: ${this.name}, color: ${this.color}`);
  }
}

const myDog = new AnimalClass('Spike', 'black');
// myDog.info();

// function constructor
const Animal = (name, color) => ({
  name,
  color,
  info: () => console.log(`name: ${name}, color: ${color}`),
});

const myOtherDog = Animal('Spike', 'black');
// console.log(myOtherDog);
// myOtherDog.info();

// destructuring

const myOtherOtherDog = Animal('Spike', 'black');
// console.log(myOtherOtherDog.name);
// console.log(myOtherOtherDog['name']);

const { name, color } = myOtherDog;
// console.log(name);
// console.log(color);

const anything = ({ name, color }) => {
  console.log(name);
  console.log(color);
}


// object.assign

const dog = Animal('Spike', 'black');

const extendedDog = Object.assign({otherName: 'Dog'}, dog);
// console.log(extendedDog);


const a = {a: 2, b: 3};

const d = { ...a, c: 3};
console.log(d);

