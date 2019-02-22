function kolmio(a,b=0){
    let x = Number(a);
    let y = Number(b);
    pintaala = x * y / 2;
    if(Number.isNaN(x) || Number.isNaN(y)) {
        throw new Error('ei numeroa');
    }
    if(x===0 || y===0) {
        throw new Error('kanta/korkeus ei voi olla nolla');
    }
    if(x<0 || y<0) {
        throw new Error('kanta/korkeus ei voi olla negatiivinen');
    }
    return Math.floor(pintaala*100)/100;
}
module.exports=kolmio;