function isPrime(n){
    for(let i=2;i<n/2;i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

console.log("isPrime(4)",isPrime(4))
console.log("isPrime(8)",isPrime(8))
