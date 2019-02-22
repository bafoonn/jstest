describe.skip('sum testit', () => {
const sum = require('./index');

    test('suorittaa yhteenlaskun 1+2, tulos 3',()=>{
        expect(sum(1,2)).toBe(3);
    });

    test('suorittaa numeromaisia merkkijonoja "minna"+"jaakko", heittää poikki', ()=> {
        expect(()=> {sum("minna","jaakko")}).toThrow("ei lukuja");
    });

    test('vain yksi parametri annettu, palautetaan luku itse', ()=> {
        expect(sum(4)).toBe(4);
    });

    test('parametrejä ei anneta', ()=> {
        expect(()=>{sum()}).toThrow("ei parametrejä");
    });
});