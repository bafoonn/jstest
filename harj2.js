function osa(a,b=1) {
    let x = Number(a);
    let y = Number(b);
    let jako = x / y;
    if(x===0 || y===0) {
        throw new Error('nollalla ei voi jakaa');
    }
    if(Number.isNaN(x) || Number.isNaN(y)) {
        throw new Error('ei lukuja');
    }
    return jako;
}
module.exports=osa;