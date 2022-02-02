const rgbToHexColor = require('./06.RGBtoHex');
const expect = require('chai').expect;

describe('RgbToHexColor function:', () => {

    it('Should return undefined when red parameter is real number.', () => {
        let actual = rgbToHexColor(30.5, 20, 29);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when green parameter is real number.', () => {
        let actual = rgbToHexColor(30, 30.7, 29);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when blue parameter is real number.', () => {
        let actual = rgbToHexColor(30, 30, 29.8);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when red parameter is negative value.', () => {
        let actual = rgbToHexColor(-30, 30, 29);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when green parameter is negative value.', () => {
        let actual = rgbToHexColor(30, -30, 29);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when blue parameter is negative value.', () => {
        let actual = rgbToHexColor(30, 30, -29);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when red parameter is bigger than 255.', () => {
        let actual = rgbToHexColor(256, 30, 29);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when green parameter is bigger than 255.', () => {
        let actual = rgbToHexColor(56, 256, 29);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when blue parameter is bigger than 255.', () => {
        let actual = rgbToHexColor(56, 25, 256);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when red parameter is not a number.', () => {
        let actual = rgbToHexColor('absdf', 25, 256);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when green parameter is not a number.', () => {
        let actual = rgbToHexColor(25, 'absdf', 256);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when blue parameter is not a number.', () => {
        let actual = rgbToHexColor(43, 25, 'absdf');

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when red parameter is number as string.', () => {
        let actual = rgbToHexColor('43', 25, 33);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when green parameter is number as string.', () => {
        let actual = rgbToHexColor(43, '25', 33);

        expect(actual).to.be.undefined;
    });

    it('Should return undefined when blue parameter is number as string.', () => {
        let actual = rgbToHexColor(43, 25, '33');

        expect(actual).to.be.undefined;
    });

    it('Should work correctly when all color values are zeros.', () => {
        let expected = '#000000'

        let actual = rgbToHexColor(0, 0, 0);

        expect(actual).to.be.equal(expected);
    });

    it('Should work correctly when all color values are equal to 255.', () => {
        let expected = `#${(255).toString(16)}${(255).toString(16)}${(255).toString(16)}`.toUpperCase();

        let actual = rgbToHexColor(255, 255, 255);

        expect(actual).to.be.equal(expected);
    });

    it('Should work correctly with one digit values in requested range of [0,9]', () => {
        let expected = '#010203'

        let actual = rgbToHexColor(1, 2, 3);

        expect(actual).to.be.equal(expected);
    });

    it('Should work correctly with two digits values in requested range of [10,99]', () => {
        let expected = `#${(23).toString(16)}${(55).toString(16)}${(75).toString(16)}`.toUpperCase();

        let actual = rgbToHexColor(23, 55, 75);

        expect(actual).to.be.equal(expected);
    });

    it('Should work correctly with three digits values in requested range of [100,255]', () => {
        let expected = `#${(233).toString(16)}${(182).toString(16)}${(190).toString(16)}`.toUpperCase();

        let actual = rgbToHexColor(233, 182, 190);

        expect(actual).to.be.equal(expected);
    });
})