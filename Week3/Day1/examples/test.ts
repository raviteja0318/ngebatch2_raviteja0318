/*
Run with
> npm install
> npm test palindrome
*/
import { palindrome } from './palindrome'

describe('When calling the palindrome function', () => {

  
    let res:Boolean
    //Arrange
    console.log("To setup the data ");
    //Act
    console.log("Call the function");
    beforeEach(()=>{
      res=palindrome('ABCD')
    })
    beforeEach
    //Assert
    it('will return true or false when called', () => {
    expect(res).toBeFalsy();
  })
  it('will return false for invalid inputs', () => {
    expect(res).toBe(false);
  })
  it('will return true for text that is a palindrome', () => {
    expect(res).toBe(true);
  })
})
/*
describe('When calling the palindrome function', () => {

  
  let res:Boolean
  //Arrange
  console.log("To setup the data ");
  //Act
  console.log("Call the function");
  beforeEach(()=>{
    res=palindrome('1234')
  })
  //Assert
  it('will return false for invalid inputs', () => {
  expect(res).toBe(false);
})
})

describe('When calling the palindrome function', () => {

  
  let res:Boolean
  //Arrange
  console.log("To setup the data ");
  //Act
  console.log("Call the function");
  beforeEach(()=>{
    res=palindrome('MALAYALAM')
  })
  //Assert
  it('will return true for text that is a palindrome', () => {
  expect(res).toBe(true);
})
})


*/


