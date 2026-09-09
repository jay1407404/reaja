

function countDigits(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "0" && str[i] <= "9") {
            count++;
        }
    }
    return count;
}



// C - TAsk
function checkContent(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let count1 = {};
    let count2 = {};

    for (let letter of str1) {
        count1[letter] = (count1[letter] || 0) + 1;
    }

    for (let letter of str2) {
        count2[letter] = (count2[letter] || 0) + 1;
    }

    return JSON.stringify(count1) === JSON.stringify(count2);
}