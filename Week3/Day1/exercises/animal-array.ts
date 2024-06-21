export function addToArray(arrayVariable: string[], itemToAdd: string) {
  arrayVariable.push(itemToAdd)

  return arrayVariable
}

let animalArray = ['Early Bird']
console.log(addToArray(animalArray,'Timely Hippo'))

