const testNumbers = require('./testNumbers');
const expect = require('chai').expect;

describe('testNumber object testing:', () =>{

    it('should contain 3 function', () => {

        let actual = testNumbers;

        expect(actual).haveOwnProperty('sumNumbers').to.be.a('function');
        expect(actual).haveOwnProperty('numberChecker').to.be.a('function');
        expect(actual).haveOwnProperty('averageSumArray').to.be.a('function');
    });

    it('sumNumbers should return undefined when 1st parameter is string', () => {
        let actual = testNumbers.sumNumbers('test', 11);

        expect(actual).to.be.undefined;
    });

    it('sumNumbers should return undefined when 1st parameter is number in string format', () => {
        let actual = testNumbers.sumNumbers('11', 11);

        expect(actual).to.be.undefined;
    });

    it('sumNumbers should return undefined when 1st parameter is object', () => {
        let actual = testNumbers.sumNumbers({}, 11);

        expect(actual).to.be.undefined;
    });

    it('sumNumbers should return undefined when 1st parameter is array', () => {
        let actual = testNumbers.sumNumbers([], 11);

        expect(actual).to.be.undefined;
    });

    //
    it('sumNumbers should return undefined when 2nd parameter is string', () => {
        let actual = testNumbers.sumNumbers(11, 'test');

        expect(actual).to.be.undefined;
    });

    it('sumNumbers should return undefined when 1st parameter is number in string format', () => {
        let actual = testNumbers.sumNumbers(11, '11');

        expect(actual).to.be.undefined;
    });

    it('sumNumbers should return undefined when 1st parameter is object', () => {
        let actual = testNumbers.sumNumbers(11, {});

        expect(actual).to.be.undefined;
    });

    it('sumNumbers should return undefined when 1st parameter is array', () => {
        let actual = testNumbers.sumNumbers(11, [11]);

        expect(actual).to.be.undefined;
    });

    it('sumNumbers should return correct sum fixed to 2 digits after floating point when positive numbers are given', () => {
        let expected = '22.00'
        let actual = testNumbers.sumNumbers(11, 11);

        expect(actual).to.be.equal(expected);
    });

    it('sumNumbers should return correct sum fixed to 2 digits after floating point when negative numbers are given', () => {
        let expected = '-22.00'
        let actual = testNumbers.sumNumbers(-11, -11);

        expect(actual).to.be.equal(expected);
    });

    it('sumNumbers should return correct sum fixed to 2 digits after floating point when one of both numbers is negative', () => {
        let expected = '-1.00'
        let actual = testNumbers.sumNumbers(-12, 11);

        expect(actual).to.be.equal(expected);
    });

    it('sumNumbers should return correct sum fixed to 2 digits after floating point when both numbers are zeros', () => {
        let expected = '0.00'
        let actual = testNumbers.sumNumbers(0, 0);

        expect(actual).to.be.equal(expected);
    });

    it('numberChecker should throw an exception when given parameter is string', () => {
        let actual = () => {testNumbers.numberChecker('test')};

        expect(actual).to.throws(Error, 'The input is not a number!');
    });

    it('numberChecker should throw an exception when given parameter is object', () => {
        let actual = () => {testNumbers.numberChecker({})};

        expect(actual).to.throws(Error, 'The input is not a number!');
    });

    it('numberChecker should return wrong message when give parameter is array', () => {

        let expected = 'The number is even!';
        let actual = testNumbers.numberChecker([]);
        expect(actual).to.be.equals(expected);
    });

    it('numberChecker should return correct message when given parameter is zero', () => {

        let expected = 'The number is even!';
        let actual = testNumbers.numberChecker(0);
        expect(actual).to.be.equals(expected);
    });

    it('numberChecker should return correct message when given parameter is number in string format', () => {

        let expected = 'The number is odd!';
        let actual = testNumbers.numberChecker('1');
        expect(actual).to.be.equals(expected);
    });
    
    it('numberChecker should return correct message when given parameter is even number', () => {

        let expected = 'The number is even!';
        let actual = testNumbers.numberChecker(12);
        expect(actual).to.be.equals(expected);
    });

    it('numberChecker should return correct message when given parameter is odd number', () => {

        let expected = 'The number is odd!';
        let actual = testNumbers.numberChecker(11);
        expect(actual).to.be.equals(expected);
    });

    it('numberChecker should return message for odd number when given parameter is real number with values after floating point', () => {

        let expected = 'The number is odd!';
        let actual = testNumbers.numberChecker(12.2);
        expect(actual).to.be.equals(expected);
    });

    it('numberChecker should return message for even number when given parameter is real number with no value after floating point', () => {

        let expected = 'The number is even!';
        let actual = testNumbers.numberChecker(12.0);
        expect(actual).to.be.equals(expected);
    });

    it('averageSumArray should return correct average value', () => {
        
        let expected = (7+8+9)/3;

        let actual = testNumbers.averageSumArray([7, 8, 9]);

        expect(actual).to.be.equals(expected);
    });

    it('averageSumArray should return NaN when array is empty', () => {

        let actual = testNumbers.averageSumArray([]);

        expect(actual).to.be.NaN;
    });

    it('averageSumArray should return correct average value when given array is flled only with zeros', () => {
        
        let expected = (0+0+0)/3;

        let actual = testNumbers.averageSumArray([0, 0, 0]);

        expect(actual).to.be.equals(expected);
    });

    it('averageSumArray should return correct average value when given array is flled only with zeros in string format', () => {
        
        let expected = (0+0+0)/3;

        let actual = testNumbers.averageSumArray(['0', '0', '0']);

        expect(actual).to.be.equals(expected);
    });

    it('averageSumArray should return correct average value when given array is filled with numbers in string format', () => {
        
        let expected = 789/3;

        let actual = testNumbers.averageSumArray(['7', '8', '9']);

        expect(actual).to.be.equals(expected);
    });

})

