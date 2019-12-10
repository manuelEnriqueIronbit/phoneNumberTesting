function createPhoneNumber(numbers){
  //Se separan los elementos deseados con slice
  for(element of numbers){
    if (typeof element !== "number"){
      return 'All elements need to be numbers'
    }
  }
  return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
}

let test = ['a', 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(test));

module.exports = createPhoneNumber;