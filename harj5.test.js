const hinta = require('./harj5');

test("syöttää funktioon hinnaksi 150 ja alv prosentiksi 24%",()=>{
    expect(hinta(150,24)).toBe(176.7);
});

test("syöttää funktioon negatiivisen alv prosentin",()=>{
    expect(()=>{hinta(100,-1)}).toThrow('alv prosentti ei voi olla negatiivinen');
});