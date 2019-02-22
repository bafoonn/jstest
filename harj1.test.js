describe.skip('sum testit', () => {
const age = require('./harj1');

test('syöttää funktioon pienemmän numeron kuin 18',()=>{
    expect(age(12)).toBeFalsy;
});

test('syöttää funktioon tekstiä',()=>{
    expect(()=>{age('kahdeksantoista')}).toThrow('ei numeroa');
});

test ('syöttää funktioon 18',()=>{
    expect(age(18)).toBeTruthy;
});

test('ei syötä funktioon mitään',()=>{
    expect(()=>{age()}).toThrow('ei numeroa');
});
});