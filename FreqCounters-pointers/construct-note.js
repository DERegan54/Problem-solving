// add whatever parameters you deem necessary
// CONSTRUCT-NOTE PROBLEM:
//     Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.  Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

//     Constraints:
//     Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

// EXAMPLES:
//     constructNote('aa', 'abc') // false
//     constructNote('abc', 'dcba') // true
//     constructNote('aabbcc', 'bcabcaddff') // true

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//         Yes. We are figuring out if the lower-case letters in the 'ltrs' string can be used to  
//         build the message in the msg string. There are no other characters besides lower-case 
//         letters in the ltrs string.
//     b.  WHAT ARE THE INPUTS?
//         The inputs are two strings.
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//         The output should be either true or false.
//     d.  DO I HAVE ENOUGH INFORMATION?
//         Yes. 
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//         My first impulse was to just call the variables msg and ltrs as is given in the
//         given function declaration, but then I thought that since we know that the ltrs string has no
//         spaces or special characters, I thought maybe instead of "msg", we should call it "word"
//         because the ltrs string will only ever be able to produce one word at a time.  
//         then I realized that the msg might not actually be a word at all, so I am going with msg and ltrs.

// 2.  EXPLORE CONCRETE EXAMPLES
//         Some concrete examples are given as Examples along with the problem description. A few others   that include real words and edge cases would be:
//             constructNote('happy', 'acdhppony') // true
//             constructNote('happy', 'acdhpqry') // false
//             constructNote('happy', '') //false
//             constructNote('', 'abcd') // true 
//             (In an interview setting I would ask about these last two)

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? Yes. - 
//         - If the msg string is longer than the ltrs string
//         - If the ltrs string is empty
//     b.  What would need to be true of msg and ltrs in order for the output to be true? 
//         - The length of ltrs must be equal to or greater than msg in length (which I've already accounted for above)
//         - All characters in msg must be present in ltrs 
//         - Not only must all of the characters in msg be present in ltrs, but they must be present in 
//           ltrs at the same or greater frequency.
//     c.  Step 1: Make a helper function called frequencyCounter (perhaps use a map instead of an object).
//         Step 2: IF msg is longer than ltrs OR IF ltrs is empty, return false
//         Step 3: Make a frequency counter of the characters in msg and then another for ltrs.   
//         Step 4: Check if the keys in msgFreq are present in ltrsFreq. If not, return false.
//         Step 5: If so, check that the value of that key in ltrsFreq is greater than or equal to the value
//          of that same key in msgFreq.  If not, return false.  If so, return true.
//           

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?
//       O(M+N)

//     b. Are there parts of the solution that could be more efficient?
//      I'm not sure. 

//     c. Are there parts of the solution that could be shorter?
//      I used a separate helper function, but that functionality could have been incorporated
//      into the main function as done in Springboard's solution.

//     d. Consider other approaches to the problem.  Are any of them more efficient?

function constructNote(msg, ltrs) {
    if(msg.length > ltrs.length || ltrs === "") return false;
    let msgFreq = frequencyCounter(msg);
    let ltrsFreq = frequencyCounter(ltrs);
    for(let key in msgFreq){
        if(!ltrsFreq[key]){
            return false;
        }
        if(msgFreq[key] > ltrsFreq[key]) {
            return false;
        }  
    }
    return true;
}

function frequencyCounter(str) {
    let strArr = Array.from(str)
    let freq = {};
    for(let val of strArr) {
        let valCount = freq[val] || 0;
        freq[val] = valCount +1;
    }
    return freq;
}


// Springboard's solution: 

/**
 * Build two frequency counters. If any of the message characters are not
 *  found in the 'letters' characters, or if there are not enough of them,
 *  return false. Otherwise return true.
 */
// function constructNote(message, letters) {
//     const lettersFreq = {};
//     const messageFreq = {};
  
//     // build frequency counter of letters
//     for (let char of letters) {
//       lettersFreq[char] = ++lettersFreq[char] || 1;
//     }
  
//     // build frequency counter of message
//     for (let char of message) {
//       messageFreq[char] = ++messageFreq[char] || 1;
//     }
  
//     // final comparison of message frequency with letters frequency
//     for (let char in messageFreq) {
//       if (!lettersFreq[char]) {
//         return false;
//       }
//       if (messageFreq[char] > lettersFreq[char]) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
