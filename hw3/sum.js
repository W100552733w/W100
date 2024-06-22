unction sumPrime(n){
    let sum=0;

    for(let i=2;i<=n;i++){
        for(let j=2;j<=i;j++){
            if(i==j){
                sum+=j;
            }else if(i%j==0){
                break
            }
        }
    }
    return sum
}

console.log("sumPrime(1060)",sumPrime(1060))
console.log("sumPrime(10)",sumPrime(10))
