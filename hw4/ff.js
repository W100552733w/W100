function f(x){
    return x&1;
}
.0function filter(a, f){
    let res = [];
    for(let i of a){
        if(f(i)) res.push(i);
    }
    return res;
}
console.log(filter([1,2,0], f))
