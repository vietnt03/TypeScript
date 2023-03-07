"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
describe('isPosition', () => {
    it('should return true when n> 0', () => {
        expect((0, main_1.isPosition)(1)).toBe(true);
        expect((0, main_1.isPosition)(2)).toBe(true);
        expect((0, main_1.isPosition)(3)).toBe(true);
    });
    it('should return true when n = 0', () => {
        expect((0, main_1.isPosition)(0)).toBe(false);
    });
    it('should return true when n < 0', () => {
        expect((0, main_1.isPosition)(-1)).toBe(false);
    });
});
