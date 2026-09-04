function countDigits(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "0" && str[i] <= "9") {
            count++;
        }
    }
    return count;
}
console.log(countDigits("ad2a54y79wet0sfgb9")); 
