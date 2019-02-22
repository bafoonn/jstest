describe.skip('sum testit', () => {
const osa = require('./harj2');

test('syöttää ohjelmaan kaksi numeroa',()=>{
    expect(osa(10,2)).toBe(5);
});

test('syöttää ohjelman nollan',()=>{
    expect(()=>{osa(0)}).toThrow('nollalla ei voi jakaa');
});

test('syöttää merkkirivin funktioon',()=>{
    expect(()=>{osa('asdf')}).toThrow('ei lukuja');
});

test('syöttää funktioon vian yhden parametrin',()=>{
    expect(osa(4)).toBe(4);
});
});