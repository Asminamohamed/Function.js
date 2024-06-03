//odd number in array Anonymous
let numbers =[1,2,3,4,5,6,7,8,9,10];
let oddNumbers=numbers.filter(num=> num%2!==0);
console.log("oddNumbers:",oddNumbers);

//odd number in array IIFE

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Immediately Invoked Function Expression (IIFE)
(function() {

    let sum = numbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    
    console.log("Sum of all numbers:", sum);
})();

// Given array of strings
let strings = ["hello", "javascript "];

// Immediately Invoked Function Expression (IIFE)
(function() {
    
    function toTitleCase(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    let titleCasedStrings = strings.map(toTitleCase);
    
    console.log("Title-cased strings:", titleCasedStrings);
})();

// Given array of strings in Anonymous
let strings = ["hello", "javascript"];

(function() {
    
    let titleCasedStrings = strings.map(function(str) {
        return str.split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
    
    console.log("Title-cased strings:", titleCasedStrings);
})();


// Given array of numbers in IIFE
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function() {
    
    let sum = numbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    
    // Print the sum of all numbers
    console.log("Sum of all numbers:", sum);
})();



// Given array of numbers to print prime number
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let primeNumbers = numbers.filter(function(num) {
    return isPrime(num);
});

// Print the prime numbers
console.log("Prime numbers:", primeNumbers);

//Palindromes
const findPalindromes = (arr) => arr.filter(word => word === word.split('').reverse().join(''));

const words = ["Aeroplane", "Banana", "Carrot", "Denmark", "Elephant"];
const palindromes = findPalindromes(words);
console.log(palindromes); 


//MedianSortedArray

const findMedianSortedArrays = (arr1, arr2) => {
    // Merge the two arrays
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);

    // Calculate the median
    const len = mergedArray.length;
    const mid = Math.floor(len / 2);

    if (len % 2 === 0) {
        // If even, median is the average of the two middle numbers
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        // If odd, median is the middle number
        return mergedArray[mid];
    }
};

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const median = findMedianSortedArrays(arr1, arr2);
console.log(median); 

//Duplicates

const removeDuplicates = function(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray);

//Array by k times

const rotateArray = function(arr, k) {
    const n = arr.length;
    k = k % n; 
    return [...arr.slice(-k), ...arr.slice(0, n - k)];
};

const array = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateArray(array, k);
console.log(rotatedArray); 
