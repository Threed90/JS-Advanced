const isSymmetric = require('./05.CheckForSymmetry');
const expect = require('chai').expect;

describe('CheckForSymmetry function:', () => {

    it('Should return false when parameter is non-symetric string', () => {
        let value = 'testValue';

        let actual = isSymmetric(value);

        expect(actual).to.be.false;
    });

    it('Should return false when parameter is symetric string', () => {
        let value = 'aba';

        let actual = isSymmetric(value);

        expect(actual).to.be.false;
    });

    it('Should return true if reversed array is equal to given array parameter.', () => {

        let symmetricArr = [1,2,1];
        let actual = isSymmetric(symmetricArr);

        expect(actual).to.be.true;
    });

    it('Should return false when array is not symmetric', () => {
        let arr = [1,2,3];
        let actual = isSymmetric(arr);

        expect(actual).to.be.false;
    });

    it('Should return true when array is from one element', () => {
        let arr = [1];
        let actual = isSymmetric(arr);

        expect(actual).to.be.true;
    });

    it('Should return true when array is empty', () => {
        let arr = [];
        let actual = isSymmetric(arr);
        expect(actual).to.be.true;
    });

    it('Should work correctly when array is from objects and is symmetry', () => {

        let arr = [{name: 'Pesho'}, {name: 'Maria'}, {name: 'Pesho'}];

        let actual = isSymmetric(arr);
        expect(actual).to.be.true;
    });

    it('Should return false when array is from onject and is not symmetric', () => {
        let arr = [{name: 'Pesho'}, {name: 'Maria'}];
        let actual = isSymmetric(arr);
        expect(actual).to.be.false;
    })
});