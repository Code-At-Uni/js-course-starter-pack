//Today we're going to get in a bunch of practice with objects. 
//As you start your JS journey, there's a ton of value in just building out the muscle memory for the fundamentals. 
//To get these fundamentals as deeply embedded as possible, type them out new each time. Avoid copying code, as you're just ignoring a chance to get in more useful practice. 

// 1. To start, let's create a variable, mysticalAnimal, and set it equal to an object literal. 


// Dot Notation:
// Recall that dot notation takes whatever is to the right of the dot, turns it into a string, and looks up that string as a property name in the object to the left of the dot. 
// Let's use dot notation to add some properties to mysticalAnimal.
// 2. Add a type property, and set it equal to 'dragon'.
// 3. Add a name property, and set it equal to 'Leslie'.
// 4. Add a likes property, and set it equal to an empty array.
// 5. Add a property called bestFriend, and set it equal to your name. 
// 6. Add in a superPower property. Set it equal to 'gives amazing hugs'.

// Access using dot notation
// 7. Now try to access all the values you've stored in mysticalAnimal. One at a time (not all at once!), what do you need to do to access the values:
  // 'dragon'
  // 'Larry'
  // []
  // your own name
  // 'gives amazing hugs'
// Hopefully this starts to feel somewhat repetitive- that's awesome! That means that you're learing this super well so far. If it doesn't, try going back and doing it again on your own time. 


// Bracket notation:
// Recall that we can do two different things with bracket notation:
  // A. Evaluate a variable or expression, and look up what that variable evalutates to as a property name in the object.
  // B. Pass in a string (as noted by the quotes surrounding it) and look up that string as a property name in the object. 
// Remember that bracket notation is the ONLY way to look up variables or expressions when using them with objects. 

// 8. Create a variable called newPropertyToAdd, and set it equal to 'food'. 
// 9. Now, using bracket notation and newPropertyToAdd, create a food property on our mysticalAnimal object, and set it equal to 'BBQ'. NOTE: you should not be typing the word food to accomplish this task!
// 10. Now set newPropertyToAdd equal to 'canFly'.
// 11. What do you expect to happen when we type in the following line?
  // mysticalAnimal[newPropertyToAdd] = true; 
  // Think through this with your pair. Then uncomment that line and console.log mysticalAnimal afterwards!
  // Now let's talk through what just happened:
    // The JS interpreter reads the line of code from left to right, just as we do. 
    // The first thing it does is encounter the variable mysticalAnimal. It looks up what this variable points to, and finds that it evaluates to an object. 
    // That object is now what the computer holds, as a result of evaluating the variable mysticalAnimal. 
    // Next, it recognizes the brackets. It knows to evaluate whatever comes inside the brackets, and then look up the results of that as a property name on the object. 
    // Next, it encounters the thing inside the brackets. In this case, that thing is a variable. So, it goes off and looks up what that variable is. It finds that variable is equal to the string 'canFly'. 
    // Now, it looks up the string 'canFly' as a property name on our mysticalAnimal object, and returns the value that is stored at that property name, which is the boolean value true in this case. 
  // That's pretty cool that we can pretend to be the machine and explain exactly what it's doing with each character of code that we've written! See, no black magic here. It just follows a set of rules that we've agreed on beforehand. 
// Now, onto point B above of using bracket notation- passing in a string. 

// 12. Using bracket notation still, pass in the string 'collects' inside the brackets, and set it equal to the value 'diamonds and gold and fire extinguishers'. 
// At first glance, this appears to be a different pattern than passing in a variable inside the brackets. But let's revisit the same steps we talked through above, and you'll notice that all we did was make one step simpler for the computer. 
// Now let's talk through what just happened:
  // The JS interpreter reads the line of code from left to right, just as we do. 
  // The first thing it does is encounter the variable mysticalAnimal. It looks up what this variable points to, and finds that it evaluates to an object. 
  // That object is now what the computer holds, as a result of evaluating the variable mysticalAnimal. 
  // Next, it recognizes the brackets. It knows to evaluate whatever comes inside the brackets, and then look up the results of that as a property name on the object. 
  // Next, it encounters the thing inside the brackets. In this case, that thing is already a string, 'collects'. THIS STEP IS THE ONLY ONE THAT CHANGES AT ALL. When the interpreter goes to evaluate the thing inside the brackets, it recognizes that thing is already a string and that it doesn't have to do any further work on this step. In the previous version, the only differences is that it had to turn the thing inside the brackets into a string by evaluating it as a variable first. 
  // Now, it looks up the string 'collects' as a property name on our mysticalAnimal object, and returns the value that is stored at that property name, which is the string 'diamonds and gold and fire extinguishes' in this case. 

// At this point, you've gotten great practice setting properties of objects using both dot and bracket notation. Now let's get in some practice accessing those properties and when to use each form of access. 
// HINT: When looking up a string, use dot notation. When looking up a variable, use bracket notation! This is all you need to know 98% of the time. 

// 13. Create a variable called thisIsAVariable. Set it equal to the string 'superPower'.
// Let's use this to play with bracket vs. dot notation. 
// 14. What do you expect to happen when we try the following line? Talk this through with your partner for a minute. 
  // console.log(mysticalAnimal.thisIsAVariable);
  // The dot notation means that JS is going to try to look for a property name that is exactly the string after the dot- in this case, it's looking for a property called thisIsAVariable in our mysticalAnimal object. And clearly we don't have a property named that, so it will return undefined!
// 15. Now try using thisIsAVariable using the proper form of access for variables. What do you get this time?
// 16. And what happens when you put that variable in quotes inside the brackets? 
  // It does the exact same thing as if you had used dot notation- looks it up as a string, not a variable. 

// Object Literals:
// One last practice! So far we've been going through and creating different properties one by one. Let's use object literal notation to do a bunch at once!
// We can create an object and give it properties all at the same time using object literal notation. An example: 
/*  
  var goalsForTheYear = {
    cycling: '5000 miles',
    climbing: '100 days',
    giving: 'selflessly'
  };
*/
// 17. Create a new variable called mysticalAnimal2, and set it equal to an object literal with the following properties: 
  // type
  // name
  // likes
  // bestFriend
  // superPower
  // food
  // canFly
  // collects

// Awesome, by now you should have a pretty good familiarity with objects, bracket and dot notation, object literals, and accessing properties of objects. Feel free to keep exploring more on your own; objects are important things to understand!
