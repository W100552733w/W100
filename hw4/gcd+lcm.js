// 計算最大公因數 (GCD)
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 計算最小公倍數 (LCM)
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// 測試
console.log("GCD of 15 and 20:", gcd(15, 20)); // 5
console.log("LCM of 15 and 20:", lcm(15, 20)); // 60

console.log("GCD of 21 and 6:", gcd(21, 6));  // 3
console.log("LCM of 21 and 6:", lcm(21, 6));  // 42

console.log("GCD of 5 and 7:", gcd(5, 7));   // 1
console.log("LCM of 5 and 7:", lcm(5, 7));   // 35
