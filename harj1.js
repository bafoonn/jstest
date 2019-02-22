function age(a){
    let x = Number(a);
    let y = 18;
    if(Number.isNaN(x)) {
        throw new Error('ei numeroa');
    }
    if(x<y){
        return false;
    }
    return true;
}
module.exports=age;