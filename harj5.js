function hinta(a,b) {
    let x = Number(a);
    let y = Number(b);

    if(y<0) {
        throw new Error('alv prosentti ei voi olla negatiivinen')
    }
    else {
        y = y/100+1;
    }

    if (x<100) {
        x = x;
    }
    else if(x>100 && x<201) {
        x = x * 0.95;
    }
    else if(x>200 && x<501) {
        x = x * 0.90;
    }
    else {
        x = x * 0.85;
    }
    return x * y;
}
module.exports=hinta;