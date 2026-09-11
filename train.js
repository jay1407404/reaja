// F - Task
function findDoublers(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return true;
            }
        }
    }

    return false;
}

console.log(findDoublers("hello")); // true
console.log(findDoublers("abc"));   // false
console.log(findDoublers("apple"));  // true