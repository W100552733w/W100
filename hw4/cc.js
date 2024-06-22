function countChar(str){
    let m = new Map();
    for(let i of str) {
        if(m.has(i)) m.set(i, m.get(i) + 1);
        else m.set(i, 1);
    }

    return m;
}
console.log(countChar("aabccadeaac"))
