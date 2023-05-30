// add whatever parameters you deem necessary

// PROBLEM: Write a function called twoArrayObject which accepts two arrays of varying lengths.
// The first array consists of keys and the second one consists of values. Your function should 
// return an object created from the keys and values. If there are not enough values, the rest of 
// keys should have a value of null. If there not enough keys, just ignore the rest of values.

// CONSTRAINTS: none
   
// EXAMPLES GIVEN:
// twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
// twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
// twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//      You are given two arrays of differing lengths.  You are returning an object whose keys are the 
//      items from the first array, and whose values are the items from the second array.  If there are 
//      fewer values than keys, set the keys with missing values to null.  If there are fewer keys than
//      values, ignore the extra values.
        
//     b.  WHAT ARE THE INPUTS?
//      Two arrays of differing lengths
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//      An object whose keys are the items in the first input array, and whose values are the items from
//      the second input array.

//     d.  DO I HAVE ENOUGH INFORMATION?
//      Yes.
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//      The input arrays should be called arr1 and arr2.  The output object should be called twoArrObj.
        
// 2.  EXPLORE CONCRETE EXAMPLES
//      Apart from the given examples, here are a few others, including edge cases:
//      twoArrayObject([one, two , three], [1,2,3,4,5]) // {one: 1, two: 2, three: 3}
//      twoArrayObject([one, two, three, four, five, six], [1,2,3,4]) // {one: 1, two: 2, three: 3, four: 4, five: null, six, null}
//      twoArrayObject([], [1,2,3]) // {}
//      twoArrayObject([one, two, three], []) // {one: null, two: null, three: null}
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false/true/undefined, etc? 
//      No. However, if the first array is empty, the function would automatically return an empty object 
      
//     b. Create a step-by-step plan to solve the problem.
//      Step 1: Create an empty object called twoArrObj, which will be the output object
//      Step 2: If arr1 is empty, return twoArrObj
//      Step 3: If arr2 is empty, loop over arr1 and set each item to be a key in twoArrObj, with a value of null.
//      Step 4: Using a for-loop over arr1, setting each item to be a key to the corresponding index in twoArrObj
//      Step 5: Using a while-loop, loop over arr2, while the index is less than twoArrObj.length-1,
//          setting each item to be a value for the key at the corresponding index. 
//      Step 6: Return twoArrObj     

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck   
//      I was able to get the keys from arr1 into the twoArrObj, but I had trouble getting the values in there.
//     b. Ignore that part and solve everything else
//      I did this
//     c. Return to the part where you are stuck and try to figure it out.
//      I did this and asked Sonia for help.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution? 
//       It would have been O(N^2), which is not good
//     b. Are there parts of the solution that could be more efficient?
//       Yes, instead of using the nested loops, using array.reduce() or array.forEach() would have been much better
//     c. Are there parts of the solution that could be shorter?

// My solution:

// function twoArrayObject(arr1, arr2) {
//     let twoArrObj = {};
//     let keys = arr1;
//     let values = arr2;
//     if (arr1.length === 0) return twoArrObj;
//     for (let key of keys) {
//         twoArrObj[[key]] = null
//        // for (let val of values) {
//        //     twoArrObj[[key]] = [val]
//         }
//     }
//     console.log(twoArrObj)
    
//     return twoArrObj; 

// }


// Sonia's solution: 

// function twoArrayObject(arr1, arr2) {
//     let twoArrObj = {};
//     arr1.forEach((element, index) => {
//       twoArrObj[element] = arr2[index];
//     });
//     return twoArrObj;
//   }
  
//   console.log(twoArrayObject([1,2,3,4,5,0], [6,7,8,9,0]))

// Springboard's solution: 

// function twoArrayObject(keys, values) {
//     return keys.reduce((twoArrObj, cur, idx) => {
//       twoArrObj[cur] = idx < values.length ? values[idx] : null;
//       return twoArrObj;
//     }, {});
//   }