// add whatever parameters you deem necessary
// PROBLEM: Write a function called isSubsequence which takes in two strings and checks whether the 
//          characters in the first string form a subsequence of the characters in the second string. 
//          In other words, the function should check whether the characters in the first string appear 
//          somewhere in the second string, without their order changing.

// CONSTRAINTS: Time Complexity - O(N + M)
   
// EXAMPLES GIVEN:
        // isSubsequence('hello', 'hello world'); // true
        // isSubsequence('sing', 'sting'); // true
        // isSubsequence('abc', 'abracadabra'); // true
        // isSubsequence('abc', 'acb'); // false (order matters)

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          Does the first string appear anywhere in the second string?

//     b.  WHAT ARE THE INPUTS?
//          The inputs are two strings

//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          True or False
       
//     d.  DO I HAVE ENOUGH INFORMATION?
//          * No.  I would ask if str1 need to appear in string 2 exactly as is, or if the 
//          characters can be broken up in string 2.  The answer is no, because the characters
//          CAN be broken up.  I figured this out by trying to use the .includes() method, and 
//          when it didn't work, I assumed the answer was no.
//          * Also, I'd want to know what to do if the substring is empty.  True or False.
//          I figured out that the answer is true from looking at the solution, but I would have 
//          originally assumed false.

//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//          I could call the first string sub and the second, str, and call
//          the pointers subIdx and strIdx.      

// 2.  EXPLORE CONCRETE EXAMPLES
//          isSubsequence("246", "123456") // true
//          isSubsequence("moon", "over the moon") // true
//          isSubsequence("happy birthday", "to you") // false
//          isSubsequence("ca", "abc") // false
//          isSubsequence("abc", "cba") // false
       
// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//           If either string is empty, the output is false.
//           If sub is longer than str, then the output is false

//     b. Create a step-by-step plan to solve the problem.
//          Step 1: If sub is empty, return true.
//          Step 2: Compare the lengths of the two strings, and if sub is longer than str, return false.
//          Step 3: Defing subIdx and strIdx and set them both equal to 0.
//          Step 4: While strIdx is less than the length of str...
//          Step 5: If the value at subIdx is equal to the value at strIdx, then add one to both subIdx & strIdx.  
//          Step 6: If the value at subIdx is NOT equal to the value at strIdx, then add one to strIdx. 
//         

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?
//      O(N)

//     b. Are there parts of the solution that could be more efficient?
//      I'm not sure

//     c. Are there parts of the solution that could be shorter?
//      After looking at Springboard's solution, there are ways to make my solution shorter.

//     d. Consider other approaches to the problem.  Are any of them more efficient?
//      I think it could have been done with nested loops, but that would have been O(N^2), which is super slow.

// function isSubsequence(substring, string) {
//     if(str1 === '') return false;
//     if(str1.length > str2.length) return false;
//     if(str1.indexOf(str2) !== -1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// My solution:
function isSubsequence(sub, str) {
    if (sub.length > str.length) return false;
    if (sub === '' || str === '') return false
    let subIdx = 0;
    let strIdx = 0;
    if(!sub) return true; // this means we reached the end of sub without returning false, so return true.
    while (strIdx < str.length) {  // until we reach the end of str
        if (str[strIdx] === sub[subIdx]) { // if the value at strIdx is equal to the value at subIdx
            subIdx ++;  // add 1 to subIdx because we are moving on to the next character in sub 
        } else {
            strIdx ++; // otherwise add one to strIdx, because we are looking at for a match at the next index in str
        }
        if (subIdx === sub.length) { //if we reach the end of sub and have found all of the characters, return true
            return true; // 
        } 
    }
    return false; // If we haven't returned true by now, this means we checked for all characters in sub against str, and not all were present, so return false.
}

// Springboard's solution: 

// function isSubsequence(str1, str2) {
//     let str1Idx = 0;
//     let str2Idx = 0;
//     if (!str1) return true;
//     while (str2Idx < str2.length) {
//       if (str2[str2Idx] === str1[str1Idx]) {
//         str1Idx += 1;
//       }
//       if (str1Idx === str1.length) return true;
//       str2Idx += 1;
//     }
//     return false;
//   }