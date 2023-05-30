// add whatever parameters you deem necessary
// add whatever parameters you deem necessary

// PROBLEM: Write a function called sameFrequency. Given two positive integers, find out if the two 
//          numbers have the same frequency of digits.
    

// CONSTRAINTS: Time Complexity - O(N + M)
   
// EXAMPLES GIVEN:
//      sameFrequency(182,281) // true
//      sameFrequency(34,14) // false
//      sameFrequency(3589578, 5879385) // true
//      sameFrequency(22,222) // false

// --------------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          Do the digits of each of the two given numbers appear the same number of times in each number?         
//     b.  WHAT ARE THE INPUTS?
//          Two positive integers
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          true or false
//     d.  DO I HAVE ENOUGH INFORMATION?
//          Yes.  
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//          The input numbers could be num1 and num2
//          The frequencies of each digit for each number could be contained in an object, so objects 
//              containing the frequencies of the digits for numbers could be freqNum1 and freqNum2
        
// 2.  EXPLORE CONCRETE EXAMPLES
//          sameFrequency(3838, 3388) // true
//          sameFrequency(1, 23) // false
//          sameFrequency(123, 234) // false
//          sameFrequency(111, 11) // false 
//          sameFrequency(123, 321) // true
       
// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//          If the two numbers do not have the same number of digits, then the output would be false
//          If the two numbers do not have the same digits, then the output would be false
       
//     b. Create a step-by-step plan to solve the problem.
//          Step 1: Convert the nums to strings using .toString()
//          Step 2: Check to see if the two strings have the same length.  If not, return false
//          Step 3: Convert strings to arrays using .split()
//          Step 4: Sort the arrays using array.sort()
//          Step 5: Convert 
//          Step 5: If the two sorted arrays are strictly equal, return true, otherwise return false

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution? 
//        O(N log N)

//     b. Are there parts of the solution that could be more efficient?
//       Yes.  Two for-loops would have been better than sorting.

//     c. Are there parts of the solution that could be shorter?
//        Probably not.

//     d. Consider other approaches to the problem.  Are any of them more efficient?
//        Yes.  See Springboard's solution.


// My solution that is not efficient at all  --- O(NlogN) time or O(M+N)time?

function sameFrequency(num1, num2) {
    return (num1.toString().split('').sort().join('') === num2.toString().split('').sort().join(''));
}


// Solution from Springboard's solution: 

// function sameFrequency(num1, num2) {
//     let str1 = num1.toString();
//     let str2 = num2.toString();

//     if (str1.length !== str2.length) return false;

//     let count1 = {};
//     let count2 = {};

//     for(let i=0; i=str1.length; i++) {
//          count1[str1[i]] = (count1[str1[i]] || 0) + 1;
//     }
   
//     for (let j=0; j=str2.length; j++){
//          count2[str2[j]] = (count2[str2[j]] || 0) + 1;
//     }
//     for (let key in count1) {
//          if (count1[key] !== count2[key]) return false;
//     }

// return true;
   
// }

