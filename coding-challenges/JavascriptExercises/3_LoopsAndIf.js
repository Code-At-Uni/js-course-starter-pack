// Before you get started, we're going to load this file into our index.html file so we can see our console.logs show up in the browser like we have the past two days! 
  // To do this, open up your index.html file in your favorite text editor. 
  // You'll notice that we're loading up several script files already, for the exercises we've done over the past two days. 
  //     <script type="text/javascript" src="2_Arrays.js"></script>
  // What the browser is doing is going off and loading/executing them in the order we give these files. 
    // So first it's going to go through and load up the day1Objects.js file, and execute all the code we've written in there. 
    // Then, after we've already run all of day1Objects.js, it's going to go through and run day2Arrays.js, with all the results from day1Objects.js available to us since it's already been run!
    // You can roughly think of this as if we just copied and pasted the code from these two files into the same file, in the order that we gave the file names. 
  // Let's go throguh and duplicate one of these lines, changing the name of the file to 3_LoopsAndIf.js.
  // Now just make sure that your day3LoopsAndIf.js file is saved in the same location as your other two .js files, and you should be good to go!

// Loops:

// We've created an array and an object for you to practice with below. 
var arr = [100,200,300,400,500];
var obj = {
  city: 'Oakland',
  slingsCode: true,
  excitementLevel: 10
};

// 1. create a for loop for arrays, to iterate through our arr. 
  // Inside the body of the for loop, console log the string 'hi, I'm inside the for loop for arrays!'
  // You should see this pop up 5 times in your console. 
  // This should tell you that the for loop is running 5 times. And all it's doing is running the body of the for loop once on each iteration. There's no magic there. 
  // The body of the for loop is just a block of code the same number of times are there are items in the array.
    // If we have 5 items in our array, we will run this block of code 5 times. 
// 2. Cool, now let's console.log what i is in each iteration.
  // You should see 
  // 0
  // 1
  // 2
  // 3
  // 4 
  // in your console.
  // All i is is a number. Since arrays are numerically indexed, all we need to access the things stored inside them are numbered indices. 
  // Put another way, to access 100, 200, and 300 from arr, all we need are the numbers 0, 1, and 2, 
    // to access the values stored at arr[0], arr[1], and arr[2]. 
  // This is cool because it highlights how we access values from an array (just grab them by their numbered indices), 
    // and also highlights again that i is just a number in each iteration, there's nothing magical about it. 
    // It's just a number that starts at 0 (or whatever you choose to start it at), and counts up to the highest number you tell it to count to. 
  // Remember that a for loop is just a block of code that we execute the same number of times as we have items in the array. 
    // The only thing that changes each time is what i is. 

// 3. Alright, now that we've figured out that i is just a number on each iteration, let's use i to access each item in our arr. 
  // Create a new for loop to iterate through arr, console logging each item to the console. We expect to see
  // 100
  // 200
  // 300
  // 400 
  // 500
  // Now that you're comfortable accessing each item in arr, let's console log both i and the relevant value stored in arr
    // by writing a new for loop. So what we'd expect to see in our console is:
    // 'the value of i is: 0, the value we're accessing in the array is 100'
    // 'the value of i is: 1, the value we're accessing in the array is 200'
    // 'the value of i is: 2, the value we're accessing in the array is 300'
    // 'the value of i is: 3, the value we're accessing in the array is 400'
    // 'the value of i is: 4, the value we're accessing in the array is 500'

// 4. Great! Now you've figured out that i is just a number we can use to access each item in the array, one per iteration. 
  // Now let's use a new for loop to modify the array. Let's add 1 to each item in arr. 
  // Now that you've added 1 to each item in arr, console.log it to see the results. 
    // We expect to see [101, 201, 301, 401, 501]
  // Have some fun doing this a few more times. Try multiplying each item in arr by some number. Then try dividing it by some number. 
    // Write entirely new for loops each time, don't just change the '+' to a '/'. 
    // We want to get practice typing out for loops as many times as possible. 

// By this point you should be feeling pretty good on iterating through arrays using for loops! Now let's look into iterating through objects. 

// 5. Create a for loop for objects, to iterate through our obj. 
  // Inside the body of the for loop, console.log the string 'hi, i'm inside the for loop for objects!''
  // You should see this pop up 3 times in your console.
  // This should tell you that the for loop for our object is running 3 times. And, much like our array for loop, 
    // all it's doing is running the body of the for loop once on each iteration. 
// 6. Now let's check out what key is on each iteration.
  // If you console.log the key in the for loop body, you should see 
  // 'city'
  // 'slingsCode'
  // 'excitementLevel' 
  // in your console.
  // key is just a variable, that is set equal to each of the keys in our object one at a time. 
    // Just as i is a varaible that is set equal to each of the numerical indices of our arr. 
  // Just for fun, let's create an empty array outside of our for loop called arrayOfKeys. 
    // On each iteration, let's push the key into this arrayOfKeys. After your for loop, console.log the arrayOfKeys. 
    // You should see ['city', 'slingsCode', 'excitementLevel']. Note that they may not be in this order, 
    // since we can't guarantee the order that an object's keys are in. 
// 7. Ok, now that we've figured out that key is just a variable that will be set equal to the name of each property in obj, 
  // let's use that to access the values stored in obj. 
  // Write a new for loop to iterate through obj, console logging each value to the console. 
  // We'd expect to see
  // 'Oakland'
  // true
  // 10
  // Now that you're comfortable accessing each value in obj, let's console log both key and the relevant value stored in obj. 
  // So what we'd expect to see in our console is:
    // 'the value of key is: city, the value we're accessing in the object is Oakland'
    // 'the value of key is: slingsCode, the value we're accessing in the object is true'
    // 'the value of key is: excitementLevel, the value we're accessing in the object is 10'
// 8. You should be feeling pretty great about iterating through objects now! 
  // So let's combine this with our if statement. 
  // Let's only log a value to the console if it equals 'Oakland'. 
  // Great! Now, let's create a new for loop for arr. Inside that for loop, let's only console.log a value 
    // if it is both greater than 100 and less than 400
    // Remember that we use && for and statements. 
  // Inside another for loop for arr, only console.log the values that are either above 400, or less than 200. 
    // Remember that we use || for or statements.


// ******** NIGHTMARE MODE! ********* // 

// 9. Now let's combine an if statement with our array for loop. 
  // Let's put 
  // if(arr[i]) {
  //   console.log(arr[i]);
  // }
  // inside of our for loop. What do you expect this to log? 
  // Remember that JavaScript does type coercion, forcing whatever is in the conditional part of our if(conditional) statement to be a boolean value
  // Let's try this again:
  // if(0) {
  //   console.log(arr[i]);
  // }
  // Keep trying different combinations inside the conditional part of the if loop. Particularly, try:
  /*
  ''
  0
  1
  NaN
  'hi there'
  true
  undefined
  -1
  null
  {}
  []
  */
// 10. What's the difference between === and == and = ?
  // Try using all three of them, and explaing the results of each one to your partner. Once you've done that, some explanations are below. Be sure that you can explain these to your partner, they're important!
  // === will always return a boolean value (true, false). It checks whether two things are equal. 
    // Put another way, threequals (===) asks the question 'Are these two things the same?', and then returns the results of that question (true or false).
  // == YOU SHOULD NEVER USE THIS. Seriously, save yourself some serious heartache and just never use this. Also, other programmers will sometimes judge you for using ==. So really, just don't use it. 
  // = This is for assignment. When you use the single equals, you are setting the thing on the left side of the operator equal to the thing on the right side of the operator. 
    // x = 'I totally understand assignments!' means that we are overwriting any value that x had previously and setting x equal to the string 'I totally understand assignments!'. Play around with this a bit if you're curious! Curiosity is a wonderful trait in engineers :)
  // Bonus Round: Plus Equals += 
    // Let's show you an example. 
    var plusEqualsVar = 5;
    plusEqualsVar += 10;
    // console.log('plusEqualsVar after += 10 is:',plusEqualsVar);
    // What += does is exacly the same as if you had typed 
    var assignedVar = 5;
    assignedVar = assignedVar = 10;
    // console.log('assignedVar after assignedVar = assignedVar + 10 is:',assignedVar);


// Arrays extra credit: 
// Let's revisit this concept that i is just a number. What if we wanted to iterate through an array backwards? 
  // To do that with arr, all we'd need are the numbers 4,3,2,1,0 in that order. 
    // Using those, we could access arr[4], arr[3], arr[2], arr[1], and arr[0], which are the values of the array in reverse. 
  // So how can we get the number 4,3,2,1,0 in that order?
  // Well let's investigate the signature of our for loop: for (var i = 0; i < arr.length; i++) 
    // We just want to reverse this. So far we've been telling i to start at 0, and while i is less than the length of the array, increase i by 1. 
    // We could just tell i to start at it's maximum value, and while it's greater than or equal to 0, to decrease by 1. 
    // That would look like for (var i = arr.length - 1; i >=0; i--) 
    // Use this pattern to iterate through our array backwards, console logging both i and arr[i] each time, like we did above:
      // 'the value of i is: 4, the value we're accessing in the array is 500'
      // 'the value of i is: 3, the value we're accessing in the array is 400'
      // 'the value of i is: 2, the value we're accessing in the array is 300'
      // 'the value of i is: 1, the value we're accessing in the array is 200'
      // 'the value of i is: 0, the value we're accessing in the array is 100'
