// add whatever parameters you deem necessary
// add whatever parameters you deem necessary

// PROBLEM:  Given an array of integers, and a number, find the number of pairs of integers
// in the array whose sum is equal to the second parameter. You can assume that there will 
// be no duplicate values in the array.
    

// CONSTRAINTS: Time Complexity - O(N * log(N)) OR Time Complexity - O(N)
   
// EXAMPLES GIVEN:
// countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
// countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
// countPairs([4,6,2,7], 10) // 1 (4,6)
// countPairs([1,2,3,4,5], 10) // 0
// countPairs([1,2,3,4,5], -3) // 0
// countPairs([0,-4],-4) // 1
// countPairs([1,2,3,0,-1,-2],0) // 2


// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          How many pairs of integers in an input array of unique integers sum up to the 
//          target integer? 

//     b.  WHAT ARE THE INPUTS?
//          An array of unique integers and a target integer
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          An integer that is the count of the number of pairs from the input array that 
//          sum up to the target integer
       
//     d.  DO I HAVE ENOUGH INFORMATION?
//          Yes.
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//          The input arguments are called arr and target, and we will call the object 
//          containing the pairs sumPairs.
        
// 2.  EXPLORE CONCRETE EXAMPLES
//          Some concrete examples apart from the given examples include:
//          countPairs([1, 2, 3, 4, -4, 5, 6, 7, 17], 13) // 2 (6,7 and -4,17)
//          countPairs([-2, 5, 10, 8, 9, 7, 19], 17) // 2 (10,7 and 8,9)
//          countPairs([5, 8, 19, 33, 13], 12) // 0
//          countPairs([], 12) //0
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be 0? 
//          If the input array contains fewer than two integers, then the output will be 0.
//          If the target is smaller than the smallest number in the array the output would be 0.
       
//     b. Create a step-by-step plan to solve the problem.
//      Step 1: Sort the array and call it sortedArr.
//      Step 2: Create a variable called pairsCount and set it equal to 0;
//      Step 3: Create two pointers called left and right.  
//      Step 4: Set left= array[0] and right = array[array.length-1]
//      Step 5: Create a while loop that loops an the following operation until left > right (or
//          while left < right)
//      Step 6: If left + right === target, then add left: right to the object as an entry
//      Step 7: If left + right !== target, add one to left 
//          

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution? 
//      O(N log N)

//     b. Are there parts of the solution that could be more efficient?
//      Yes.  Using a Set would have been O(N)

//     c. Are there parts of the solution that could be shorter?
//      I don't think so.


function countPairs(arr, target) {
    let pairsCount = 0;
    let left  = 0;
    let right = arr.length - 1;
    arr.sort((a,b) => a - b);
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) {
            pairsCount ++;
            left ++;
            right--;
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return pairsCount;
}


// Springboard's solutions: 

// // O(n) / O(n)
// function countPairs(arr, num) {
//   let s = new Set(arr);
//   let count = 0;
//   for (let val of arr) {
//     s.delete(val);
//     if (s.has(num - val)) {
//       count++;
//     }
//   }
//   return count;
// }

// O(n log n) / O(1)

// function countPairs(arr, num) {
//     arr.sort((a, b) => a - b);
//     let count = 0;
//     let start = 0;
//     let end = arr.length - 1;
//     while (start < end) {
//         let sum = arr[start] + arr[end];
//         if (sum === num) {
//             count++;
//             start++;
//             end--;
//         } else if (sum < num) {
//             start++;
//         } else {
//             end--;
//         }
//     }
//     return count;
// }