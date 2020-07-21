// SPLIT
// const bestFriend = "Trinity";

// const bestFriendArray = bestFriend.split('');

// console.log(bestFriendArray);

// JOIN
// const array2 = ['cow', 'dog', 'cat'];

// const string = array2.join(', ');

// console.log(string);

//POP
// const animals = ["cow", "dog", "cat"];

// const lastAnimal = animals.pop();

// console.log(animals);
// console.log(lastAnimal);

//SHIFT
// const first = animals.shift();
// console.log(first, animals)

// Write a function that takes an array and an index and prints out that value.
// const arrayValue = (array, index) => {
//   return array[index];
// };

// const animals = ['cow', 'pig', 'cat']

// console.log(arrayValue(animals, 2))

//FIND GREG
 const people = ['Charlie', 'Katie', 'Hunter', 'Dr. T']

const gregChecker = (array) => {
    return array.includes('Greg') ? 'Greg is here!' : 'No Greg. :('
 }

 console.log(gregChecker(people))