// Cursor Park (anyone not typing put your cursor here)


// Rewrite this function in Arrow form:

/*function sayHello(firstName: string, lastName: string) {
  console.log(`sayHello: Hello ${firstName} ${lastName}`)
}*/

let sayHello = (firstName: string, lastName: string) => console.log(`sayHello: Hello ${firstName} ${lastName}`)

sayHello('Neil','Jennings')

// TODO make hiEveryone() as arrow function with sayHello functionality

let hiEveryone = (firstName: string, lastName: string) => sayHello(firstName,lastName)


hiEveryone('Neil','Jennings')


// Rewrite this function in one-line arrow syntax:

/*function loadsOfMoney(myWages: number) {
  return myWages * 10
}*/

let loadsOfMoney = (myWages: number) => {return myWages * 10}

// TODO make soMuchMoreMoney() as a one-line arrow expression with loadsOfMoney

let soMuchMoreMoney = (myWages: number) => loadsOfMoney(myWages)

const resultSum = soMuchMoreMoney(300)
console.log(`resultSum: ${resultSum}`)
