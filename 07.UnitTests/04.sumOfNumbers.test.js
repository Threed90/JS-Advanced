const sum = require('./04.sumOfNumbers');
const {assert, expect} = require('chai');
const { describe } = require('mocha');

describe('Sum of numbers function:', () => {

    it('Should return correct sum of array element', () =>{

        let arr = ['1', '2', '3'];
        let expected = 6;

        let actual = sum(arr);

        //assert.equal(actual, expected);
        expect(actual).to.be.equal(expected);
    });

    it('Should return Nan when at least one of items in array isn\'t digit sequance', () => {
        let arr = ['1', 'notANumber', '2'];
        
        let actual = sum(arr);

        expect(actual).to.be.NaN;
    });

    it('Should return zero as result if array is empty', () => {
        let arr = [];
        let actual = sum(arr);

        expect(actual).to.be.equal(0);
    });

    it('Should work correctly with real numbers', () => {
        let arr = ['1.1', '2.2', '3.3'];
        let expected = 6.6;

        let actual = sum(arr);

        expect(actual).to.be.equal(actual);
    });

    it('Should sum digits of a single number value as string', () => {
        let value = '153';
        let expected = 9;
        let actual = sum(value);

        expect(actual).to.be.equal(expected);
    });

    it('Should throws TypeError when parameter is diffrent than string or array', () => {
        //let err = new TypeError('arr is not iterable');

        let err = () => sum(123);

        expect(err).to.throw(TypeError);
    });
})