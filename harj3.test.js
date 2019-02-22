describe.skip('sum testit', () => {
const bussi = require('./harj3');

test('syöttää funktioon merkkirivin',()=>{
    expect(()=>{bussi('asdf')}).toThrow('ei numeroa');
});

test('ei syötä funktioon mitään',()=>{
    expect(()=>{bussi()}).toThrow('ei numeroa');
})

test('syöttää 5',()=>{
    expect(bussi(5)).toBe(0);
});

test('syöttää 13',()=>{
    expect(bussi(13)).toBe(1);
});

test('syöttää 19',()=>{
    expect(bussi(19)).toBe(1.5);
});

test('syöttää 30',()=>{
    expect(bussi(30)).toBe(3);
});

test('syöttää 70',()=>{
    expect(bussi(70)).toBe(1.5);
});
});