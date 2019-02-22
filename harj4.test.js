describe.skip('sum testit', () => {
const kolmio = require('./harj4');

test('syöttää funktioon merkkijonon',()=>{
    expect(()=>{kolmio('asdf')}).toThrow('ei numeroa');
});

test('syöttää funktioon 0',()=>{
    expect(()=>kolmio(0)).toThrow('kanta/korkeus ei voi olla nolla');
});

test('syöttää funktioon 5 ja 9,5',()=>{
    expect(kolmio(5,9.5)).toBe(23.75);
});

test('syöttää funktioon numeron 3, toinen numero jää nollaksi',()=>{
    expect(()=>{kolmio(3)}).toThrow('kanta/korkeus ei voi olla nolla');
});

test('syöttää funktioon numeron -4 ja 11',()=>{
    expect(()=>{kolmio(-4,11)}).toThrow('kanta/korkeus ei voi olla negatiivinen');
});
});