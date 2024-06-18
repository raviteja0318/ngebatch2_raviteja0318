//testing the add module

//keywords to be added to the test file

//describe - to define test suite - which holds multiple test methods/cases

//it - a method used to define the test cases

//import the logic file - module.ts file

import {add} from './add'

describe("to test the add module ",()=>{
    
        let result:number;
        
        //Arrange
        console.log("To setup the data ");
        
        //Act
        console.log("Call the function");
        
        beforeEach(()=>{
            result = add(34,45);
        })
      
        //Assert
     
        it('add two numbers',()=>{    
            
            //console.log("Compare the results with actual and Expected")  //Assert
            expect(result).toBe(79);
        })
})

describe("to test the add module with one positive and one negative ",()=>{
    
    let result:number;
    
    //Arrange
    console.log("To setup the data ");
    
    //Act
    console.log("Call the function");
    
    beforeEach(()=>{
        result = add(34,-4);
    })
  
    //Assert
 
    it('add two numbers with 34 and -4 to be 30',()=>{    
        
        //console.log("Compare the results with actual and Expected")  //Assert
        expect(result).toBe(30);
    })
})

describe("to test the add module two negative numbers ",()=>{
    
    let result:number;
    
    //Arrange
    console.log("To setup the data ");
    
    //Act
    console.log("Call the function");
    
    beforeEach(()=>{
        result = add(-34,-6);
    })
  
    //Assert
 
    it('add two numbers with -34 and -6 to be 50',()=>{    
        
        //console.log("Compare the results with actual and Expected")  //Assert
        expect(result).toBe(50);
    })
})