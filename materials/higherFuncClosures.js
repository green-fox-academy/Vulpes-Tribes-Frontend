// default params

function isFourES5(numb, def=3){
  console.log(def);
  return numb === 4;
}

// isFourES5(5);
// isFourES5(5, 2);

// arrow funcs
// const isFour = numb => numb === 4;

// console.log(isFour(4));
// console.log(isFour('4'));
// console.log(isFour(3));


// callback

const logger = toLog => console.log(toLog);

const isFour =  (numb, callback) =>{
  callback(numb);
  return numb === 4;
};

// isFour(2, logger);

// higher order functions

const animals = ['dog', 'cat', 'goldfish', 'giraffe'];

animals.forEach(animal => {
  // console.log(animal);
})

const isThereAnyDog = arr => arr.some(e => e === 'dog');

// console.log(isThereAnyDog(animals));

const numbs = [1,2,3,4,5,6];

// function doubling(arr){
//   const tempArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     tempArr.push(arr[i] * 2);
//   }
//   return tempArr;
// }

const doubling = arr => arr.map(e => e * 2);
// console.log(doubling(numbs));

// function filterEven(arr){
//   const tempArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       tempArr.push(arr[i]);
//     }
//   }
//   return tempArr;
// }

const filterEven = arr => arr.filter(e => e % 2 == 0);

// console.log(filterEven(numbs));

// var vs let/const

if (true) {
  let a = 5;
}



// console.log(a);

// closure

const cashMachine = initCash => {
  let cash = initCash;
  return {
    info: () => console.log(cash),
    deposit: (value) => cash += value > 0 ? value : 0 
  }
}

const cm = cashMachine(500);
cm.info();
cm.deposit(100);
cm.deposit(-100);
cm.info();

// promises?

// ajax, fetch

