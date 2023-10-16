var a = ["55","44","33","100","77","99"];

console.log(a);

var b = bubble(a);

console.log(b);

function bubble(l){
    let n = l.length;
    for(let i =0; i<n-1; i++){
        for(let j=0; j<n-i-1; j++){
            if(l[j]>l[j+1]){
                let temp = l[j];
                l[j] = l[j+1];
                l[j+1] = temp;
            }
        }
    }
    return l;
}
