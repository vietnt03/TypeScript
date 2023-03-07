import {isPosition} from './main'


describe('isPosition', () => {
    it ('should return true when n> 0', ()=>{

        expect(isPosition(1)).toBe(true);
        expect(isPosition(2)).toBe(true);
        expect(isPosition(3)).toBe(true);

    })
    it ('should return true when n = 0', ()=>{
        expect (isPosition(0)).toBe(false);
    })
    it ('should return true when n < 0', ()=>{
    expect (isPosition(-1)).toBe(false);
    })



})