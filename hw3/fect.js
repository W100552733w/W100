function vectorAdd(a,b){
    var c = []
    for(var i=0;i<a.length;i++){
        c[i]=a[i]+b[i]
    }
    return c
}

var a=[3,6], b=[15,18]
console.log("a(3,6)+b(15,18)",vectorAdd(a,b))
