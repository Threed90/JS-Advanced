const mathEnforcer = require('./04.MathEnforcer');
const expect = require('chai').expect;

describe('MathEnforcer object:', () => {

    it('Should have property function "addFive"', () => {
        
        expect(mathEnforcer).to.be.an('object').that.hasOwnProperty('addFive');
    });

    it('Should have property function "subtractTen"', () => {
        
        expect(mathEnforcer).to.be.an('object').that.hasOwnProperty('subtractTen');
    });

    it('Should have property function "sum"', () => {
        
        expect(mathEnforcer).to.be.an('object').that.hasOwnProperty('sum');
    });

    it('Should increase given integer with 5 when function "addFive" is used.', () => {
        let expected = 20;
        expect(mathEnforcer.addFive(15)).to.be.equal(expected);
    });

    it('Should return zero when addFive get -5 parameter', () => {
        let expected = 0;
        expect(mathEnforcer.addFive(-5)).to.be.equal(expected);
    });

    it('Should increase given real number with 5 when function "addFive" is used.', () => {
        let expected = 20.5;
        expect(mathEnforcer.addFive(15.5)).to.be.equal(expected);
    });

    it('Should return undefined when given parameter for function "addFive" is not a number', () => {
        expect(mathEnforcer.addFive('text')).to.be.undefined;
    });

    it('Should return undefined when given parameter for function "addFive" is number as string', () => {
        expect(mathEnforcer.addFive('15')).to.be.undefined;
    });

    it('Should return 5 when given number for function "addFive" is zero', () => {
        expect(mathEnforcer.addFive(0)).to.be.equal(5);
    });

    it('Should decrease given integer with 10 when function "subtractTen" is used.', () => {
        let expected = 10;
        expect(mathEnforcer.subtractTen(20)).to.be.equal(expected);
    });

    it('Should decrease given real number with 10 when function "subtractTen" is used.', () => {
        let expected = 10.5;
        expect(mathEnforcer.subtractTen(20.5)).to.be.equal(expected);
    });

    it('Should return -10 when given number to the function "subtractTen" is zero.', () => {
        let expected = -10;
        expect(mathEnforcer.subtractTen(0)).to.be.equal(expected);
    });

    it('Should return negative value when given number to the function "subtractTen" is negative.', () => {
        let expected = -20;
        expect(mathEnforcer.subtractTen(-10)).to.be.equal(expected);
    });

    it('Should return undefined when given parameter for function "subtractTen" is not a number', () => {
        expect(mathEnforcer.subtractTen('text')).to.be.undefined;
    });

    it('Should return undefined when given parameter for function "subtractTen" is number as string', () => {
        expect(mathEnforcer.subtractTen('15')).to.be.undefined;
    });

    it('Should return undefined when 1st given parameter to the function "sum" is not a number', () => {
        let actual = mathEnforcer.sum('text', 19);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when 2nd given parameter to the function "sum" is not a number', () => {
        let actual = mathEnforcer.sum(12, 'text');

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when 1st given parameter to the function "sum" is number as string', () => {
        let actual = mathEnforcer.sum('12', 10);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when 2nd given parameter to the function "sum" is number as string', () => {
        let actual = mathEnforcer.sum(12, '10');

        expect(actual).to.be.undefined;
    });

    
    it('Should return correct value for the function "sum" with integers', () => {
        let expected = 22;
        let actual = mathEnforcer.sum(12, 10);

        expect(actual).to.be.equal(expected);
    });

    it('Should return correct value for the function "sum" with real numbers', () => {
        let expected = 23;
        let actual = mathEnforcer.sum(12.5, 10.5);

        expect(actual).to.be.equal(expected);
    });

    it('Should return negative value for the function "sum" with both parameters are negative', () => {
        let expected = -23;
        let actual = mathEnforcer.sum(-12.5, -10.5);

        expect(actual).to.be.equal(expected);
    });
})