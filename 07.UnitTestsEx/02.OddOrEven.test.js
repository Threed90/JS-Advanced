const isOddOrEven = require('./02.OddOrEven');
const expect = require('chai').expect;

describe('OddOrEven function:', () => {
    it('Should return undefined when parameter is number.', () => {
        let actual = isOddOrEven(1);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when parameter is array.', () => {
        let actual = isOddOrEven([1, 2, 3]);

        expect(actual).to.be.undefined;
    });

    it('Should return even when parameter is empty string.', () => {
        let expected = 'even';
        let actual = isOddOrEven('');

        expect(actual).to.be.equal(expected);
    });

    it('Should return even when the length of string is even.', () => {
        let expected = 'even';
        let actual = isOddOrEven('test');

        expect(actual).to.be.equal(expected);
    });

    it('Should return odd when the length of string is odd.', () => {
        let expected = 'odd';
        let actual = isOddOrEven('testForOddLen');

        expect(actual).to.be.equal(expected);
    });
})