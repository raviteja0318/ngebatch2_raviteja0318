/*
Run this with
> npm install
> npm test maths-utils
*/

import { add, safeMultiply } from './maths-utils'

describe('When calling the Add function', () => {

  let result:number
    //Arrange
    console.log("To setup the data ");
    //Act
    console.log("Call the function");
    beforeEach(()=>{
      result=add('10',15);
    })
    //Assert
    it('will return true or false when called', () => {
      expect(result).toBe(25);
    })

    it('will add strings and numbers', () => {
    expect(result).toBe('1015')
    })
})

describe('When calling the safeMultiply function', () => {
  let product:number
    //Arrange
    console.log("To setup the data ");
    //Act
    console.log("Call the function");
    beforeEach(()=>{
      product=safeMultiply(6,5);
  })
  //Assert
  it('should multiply two integers', () => {
    expect(product).toBe(30)

  })

  it('will throw an error when parameter a is bad', () => {
    // Arrange: Setup variables here

    // Act: Call function here + Assert: Check results here
    // Hint: add a wrapper function
        
    // Assert
    // Hint: use "toThrow()"
    expect(()=>{
      safeMultiply('abc',7)
    }).toThrow("Parameters a and b must be numeric but got a='abc' and b=7")
  })
    
  it('will throw an error when parameter b is bad', () => {
    // Arrange: Setup variables here
        
    // Act: Call function here
        
    // Assert: Check results here
    // You can either do this with a wrapper function and .toThrow, or you can try using a try/catch block
    expect(()=>{
      safeMultiply(5,'def')
    }).toThrow("Parameters a and b must be numeric but got a=5 and b='def'")
  })
})
