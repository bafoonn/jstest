function bussi(a){
    let x = Number(a);
    let hinta = null;
    if(Number.isNaN(x)) {
        throw new Error('ei numeroa');
    }
    if(x<7) {
        hinta = 0;
    }
    else if(x>=7 && x<16) {
        hinta = 1;
    }
    else if(x>=16 && x<=25) {
        hinta = 1.5;
    }
    else if(x>25 && x<=65) {
        hinta = 3;
    }
    else {
        hinta = 1.5;
    }
    return hinta;
}
module.exports=bussi;