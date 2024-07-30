// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum of an array using a recursive approach
const sum = (arr = [], sumOfN = 0, idx = 0) => {
    // Base case: if idx reaches the length of the array, return the accumulated sum
    if (idx === arr.length) return sumOfN;
    
    // Recursive case: add the current element to the sum and move to the next index
    return sum(arr, sumOfN + arr[idx], idx + 1);
}

// Reverse a string using a recursive approach
const reverse = (str) => {
    // Base case: if the string is empty, return an empty string
    if (str === "") return "";
    
    // Recursive case: take the first character and append it to the reversed rest of the string
    return reverse(str.substring(1)) + str[0];
};

// Iterative approach to solving the Fibonacci problem
const fibIter = (n) => {
    // Handle the base cases where n is 0 or 1
    if (n === 0 ) return 0

    // Initialize variables to store the previous two Fibonacci numbers
    let prev = 0; // Fibonacci(0)
    let curr = 1; // Fibonacci(1)
    let next = prev + curr; 

    // Calculate Fibonacci numbers iteratively up to the nth number
    for (let i = 2; i < n; i++) {
        prev = curr;        // Update prev to the current Fibonacci number
        curr = next;        // Update curr to the new Fibonacci number
        next = prev + curr; // Calculate the next Fibonacci number
    }

    // Return the nth Fibonacci number
    return next;
};
// Recursive fibonacci
const fibRec = (n) => {
    if (n === 0 || n === 1) {
        return n; // base case 
    }else {
    return fibRec(n - 1) + fibRec(n - 2) // builds out the sequence 
    }
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
       // Base case: if start index is greater than end index, target is not found
       if (start > end) {
        return -1;
    }
    
    // Calculate the middle index of the current segment
    const mid = Math.floor((start + end) / 2);
    
    // Compare the target with the middle element
    if (arr[mid] === target) {
        return mid; // Target found at mid index, return it
    } else if (arr[mid] > target) {
        // If target is less than the middle element, search the left half
        return binarySearch(arr, target, start, mid - 1);
    } else {
        // If target is greater than the middle element, search the right half
        return binarySearch(arr, target, mid + 1, end);
    }
    
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
