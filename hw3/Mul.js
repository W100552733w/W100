function matrixMul(a,b){
    var c=[]
    for (var i=0; i<a.length; i++) {
        c[i]=[0,0]
        for (var j=0; j<a[0].length; j++) {
            for(var k=0;k<a.length; k++){
                c[i][j]+=a[i][k]*b[k][j]
            }
        }
    }
    return c    
}
var a=[[36,4],[12,22]], b=[[3,8],[5,6]]
console.log("a=[[36,4],[12,22]]*b=[[3,8],[5,6]]= ",matrixMul(a,b))


