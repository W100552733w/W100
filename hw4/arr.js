function array_min(a){
    let res = Infinity;
    for(let i of a){
        res = (res > i)? i: res;
    }
    return res;
}
console.log(array_min([1,2,9,-1000]));
