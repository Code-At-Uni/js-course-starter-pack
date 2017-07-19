// Welcome to functions! 
// First things first, make sure to add this file to your index.html file, just like you did yesterday. 
// Functions are an incredibly important part of JS. They let us follow the programming best practice of being DRY (Don't Repeat Yourself). Whenever we start typing the same thing multiple times, we can probably put that inside a function, making our lives easier, and our code easier to read. 

// Let's ease into this. 
// 1. Let's a function called speak that takes in a single parameter called item, and logs that item to the console.
  var speak = function(item) {
    console.log('item is set equal to what the user passed into us:', item);
  }
  // Which part of this is the function body? 
  // What is the parameter name?
  // Is this function a return value function, or a side effect function?
  // What happens if we change console.log(item) to have quotes around item, like console.log('item') ?
  // What you should be noticing is that item is simply a variable that is set equal to what the user gives us. And that you can/should be console.logging it to verify what it is. 
// 2. Now let's change the parameter name from item to val. 
  // Repeat what we did in #1, passing in a variety of values just to verify that what the user passes in to us is stored into val. 
// A function is just a block of code that we've created but not run yet. 
// 3. Create a function called climbHalfDome, that just console.logs "Yay, congrats on climbing such an awesome rock!". Do not invoke this function. Notice how we never see that show up in our console, because the interpreter doesn't ever get inside the function body until we invoke that function. 
// 4. Inside of climbHalfDome, console.log variables that don't exist. These will throw errors as soon as this function is invoked, but since it isn't invoked yet, JS doesn't give us any errors! 
// 5. Now invoke the function, and notice that the interpreter only now enters the body of the function to execute the code for the first time, and finds the errors when we invoke it. 

// Just to recap, a function is a set of instructions that we write down and store. It's like driving directions from the airport to your house. And you get to use these directions at your discretion! You can use them immediately, or hand them out to friends when they come to visit, or never use them at all if you decide all of a sudden that you prefer trains. This set of instructions can be invoked many times by many different people with different arguments (type of car, time of day, traffic conditions, etc.). 
// Much as our for loops are just blocks of code that we get to run once for each item in an array, a function is just a block of code that we get to run once per time that it's invoked. 
// Whenever you put the open and closed parens () next to a function name, you will invoke that function right there. This seems obvious now, but will trip many of you up later when we get to functional programming (next week, next week!), so remember it. 


// Returns vs. Side Effects
// A function can work in one of two primary ways: through returned values, or side effects. 
// Let's explore what this means. 
// 6. Create a function called add5Return. All it does is take in a single number, and return that number plus 5. Do not put any console.logs inside this function- we're going to play with that part next!
// 7. Invoke add5Return from inside your day4Functions.js file. What do you see in the console?
  // Answer: nothing! 
  // What's going on here? 
  // We're invoking the function, it's running and doing what we want, but we're not doing anything with the results returned from it. 
  // Try capturing the results of add5Return into a variable, like so:
  // var add5Results = add5Return(10);
  // console.log that variable. Now what do you see in your console? 
  // If you don't do anything with the result a function returns, it will have done all that work, only to hand the results off to nothing, essentially dropping it on the floor since nothing was there to catch it. 
// 8. Create a variable in the global scope called sideEffectResults, and set it equal to 20. 
// 9. Create a variable called add5SideEffect that takes in no parameters, and doesn't return anything. Instead, this function will have a side effect by adding 5 to sideEffectResults. 
  // Invoke add5SideEffect inside your day4Functions.js file. What do you see in your console? 
  // Answer: nothing! 
  // console.log sideEffectResults. Now what do you see in your console? add5SideEffect worked! It had a side effect, in this case changing a variable available in the global scope. 
  // Out of curiosity, what happens when you try the following line?
  // var sideEffectReturn = add5SideEffect(); 
  // What is sideEffectReturn equal to? Well, it's equal to whatever we're returning from invoking add5SideEffect. Which is nothing, right, since we don't have a return statement?
  // If a function doesn't explicitly return anything with a return statement, JS will help us out by automatically returning undefined for us. All functions therefore return something, even if it's just undefined. 
// 10. Discuss with your partner what a side effect is vs. a returned value. 
  // Talk about how we observe the results of each one. 
  // Talk about what happens when we store (or don't?) the results of a function that has a side effect, vs. what happens when we store the results of a function that has a returned value. 

//11. Return values immediately stop the rest of a function from being executed. It's kind of like that function has fulfilled it's destiny, and gets to retire now. Let's test this out. 
  // Inside one of your previous functions, console.log a variable that doesn't exist before your return statement. Notice how the JS interpreter throws a nasty error. 
  // Move that error-inducing line until after the return statement. What happens now?
  // The return statement tells the interpreter that we're done with all the code inside the function body, so the error-inducing code after the return statement never gets executed!

// We can return anything we want from a function! 
// 12. Let's create a function called superPowerAdder, that does a few things:
  // A. takes in a single object
  // B. adds a superPower property with a value of 'JS ninja-ing'
  // C. Returns that object
  // Invoke this function inside a for loop that's iterating through the grandCouncil array we created on Tuesday. 
  // Make sure to ignore the string in that array, and only invoke superPowerAdder on the objects. 
  // Overwrite each object in the grandCouncil array with the respective results of superPowerAdder
  // As always, console.log frequently at various steps along the way to make sure your results are what you're expecting them to be!

// 13. Define a function called animalMaker. This function has three parameters: 
  // inputType
  // inputSuperPower
  // inputCanFly
  // This function will return an object based on this user input. 
  // Example results:
    // var createdAnimal = animalMaker('red panda','being ridiculously cute',false);
    // console.log(createdAnimal);
      /*
      {
        type: 'red panda',
        superPower: 'being ridiculously cute',
        canFly: false,
        createdBy: 'preston'
      }
      */
    // Notice how each animals will have a createdBy property that will be the same for all of them. But then the rest of the properties are set equal to the inputs the user gives us. 


// Congrats, you now have a bunch of practice with functions!
// Let's review for a minute:
// Functions are just blocks of code, or instructions.
// We define them and invoke them separately. Putting () next to the function name inokes the function right there.
// Returning a value from a function is the one direct tunnel you have from within a function to the world outside the function. 
// return statements immediately end the function invocation.
// Functions can have side effects, modifying variables outside of the function body. 
// The parameters we define for a function will be set equal to what the user passes in to us. This part just happens automatically for us! 

// Next week we'll be putting together everything we learned this week with a bunch of practice! 
