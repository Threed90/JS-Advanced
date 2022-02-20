const flowerShop = require('./flowerShop');
const expect = require('chai').expect;

describe('flowerShop object testing:', () => {
    it('should have 3 own properties of type function', () => {
        expect(flowerShop).to.haveOwnProperty('calcPriceOfFlowers').to.be.a('function');
        expect(flowerShop).to.haveOwnProperty('checkFlowersAvailable').to.be.a('function');
        expect(flowerShop).to.haveOwnProperty('sellFlowers').to.be.a('function');
    });

    it('calcPriceOfFlowers should throw error, when 1st parameter is number', () => {
        let actual = () => {flowerShop.calcPriceOfFlowers(11, 11, 11)};

        expect(actual).to.throws(Error, 'Invalid input!');
    });

    it('calcPriceOfFlowers should throw error, when 1st parameter is array', () => {
        let actual = () => {flowerShop.calcPriceOfFlowers([], 11, 11)};

        expect(actual).to.throws(Error, 'Invalid input!');
    });

    it('calcPriceOfFlowers should throw error, when 1st parameter is object', () => {
        let actual = () => {flowerShop.calcPriceOfFlowers({}, 11, 11)};

        expect(actual).to.throws(Error, 'Invalid input!');
    });

    it('calcPriceOfFlowers should throw error, when 2nd parameter is real number', () => {
        let actual = () => {flowerShop.calcPriceOfFlowers('test', 11.5, 11)};

        expect(actual).to.throws(Error, 'Invalid input!');
    });

    it('calcPriceOfFlowers should throw error, when 2nd parameter is number in string format', () => {
        let actual = () => {flowerShop.calcPriceOfFlowers('test', '11', 11)};

        expect(actual).to.throws(Error, 'Invalid input!');
    });

    it('calcPriceOfFlowers should throw error, when 2nd parameter is string', () => {
        let actual = () => {flowerShop.calcPriceOfFlowers('test', 'test', 11)};

        expect(actual).to.throws(Error, 'Invalid input!');
    });

    it('calcPriceOfFlowers should throw error, when 2nd parameter is array', () => {
        let actual = () => {flowerShop.calcPriceOfFlowers('test', [], 11)};

        expect(actual).to.throws(Error, 'Invalid input!');
    });

    it('calcPriceOfFlowers should throw error, when 2nd parameter is object', () => {
        let actual = () => {flowerShop.calcPriceOfFlowers('test', {}, 11)};

        expect(actual).to.throws(Error, 'Invalid input!');
    });

    //
    it('calcPriceOfFlowers should throw error, when 3rd parameter is real number', () => {
        let actual = () => {flowerShop.calcPriceOfFlowers('test', 11, 11.5)};

        expect(actual).to.throws(Error, 'Invalid input!');
    });

    it('calcPriceOfFlowers should throw error, when 3rd parameter is number in string format', () => {
        let actual = () => {flowerShop.calcPriceOfFlowers('test', 11, '11')};

        expect(actual).to.throws(Error, 'Invalid input!');
    });

    it('calcPriceOfFlowers should throw error, when 3rd parameter is string', () => {
        let actual = () => {flowerShop.calcPriceOfFlowers('test', 11, 'test')};

        expect(actual).to.throws(Error, 'Invalid input!');
    });

    it('calcPriceOfFlowers should throw error, when 3rd parameter is array', () => {
        let actual = () => {flowerShop.calcPriceOfFlowers('test', 11, [])};

        expect(actual).to.throws(Error, 'Invalid input!');
    });

    it('calcPriceOfFlowers should throw error, when 3rd parameter is object', () => {
        let actual = () => {flowerShop.calcPriceOfFlowers('test', 11, {})};

        expect(actual).to.throws(Error, 'Invalid input!');
    });

    it('calcPriceOfFlowers should return correct string when all parameters passed conditions', () => {
        let expected = `You need $${(11*11).toFixed(2)} to buy test!`;
        let actual = flowerShop.calcPriceOfFlowers('test', 11, 11);

        expect(actual).to.be.equal(expected);
    });

    it('checkFlowersAvailable function should return correct message when given flower is contained in the given array', () => {
        let expected = `The test are available!`;
        let actual = flowerShop.checkFlowersAvailable('test', ['test1', 'test2', 'test']);

        expect(actual).to.be.equal(expected);
    });

    it('checkFlowersAvailable function should return correct message when given flower is contained in the given array as 1st presented value', () => {
        let expected = `The test are available!`;
        let actual = flowerShop.checkFlowersAvailable('test', ['test', 'test2', 'test3']);

        expect(actual).to.be.equal(expected);
    });

    it('checkFlowersAvailable function should return correct message when given flower is not contained in given array', () => {
        let expected = `The test123 are sold! You need to purchase more!`;
        let actual = flowerShop.checkFlowersAvailable('test123', ['test', 'test2', 'test3']);

        expect(actual).to.be.equal(expected);
    });

    it('checkFlowersAvailable function should return correct message when is given empty array', () => {
        let expected = `The test123 are sold! You need to purchase more!`;
        let actual = flowerShop.checkFlowersAvailable('test123', []);

        expect(actual).to.be.equal(expected);
    });

    //^^^^ maybe need test with objects and arrays for checkFlowersAvailable function, also for undefined flower parameter ^^^^

    it('sellFlowers function should throw error when 1st given parameter is string', () => {
        let actual = () => {flowerShop.sellFlowers('test', 1)};

        expect(actual).to.throw(Error, 'Invalid input!');
    });

    it('sellFlowers function should throw error when 1st given parameter is object', () => {
        let actual = () => {flowerShop.sellFlowers({}, 1)};

        expect(actual).to.throw(Error, 'Invalid input!');
    });

    it('sellFlowers function should throw error when 1st given parameter is array', () => {
        let actual = () => {flowerShop.sellFlowers([], 1)};

        expect(actual).to.throw(Error, 'Invalid input!');
    });

    it('sellFlowers function should throw error when 1st given parameter is number', () => {
        let actual = () => {flowerShop.sellFlowers(10, 1)};

        expect(actual).to.throw(Error, 'Invalid input!');
    });

    it('sellFlowers function should throw error when 2nd given parameter is real number', () => {
        let actual = () => {flowerShop.sellFlowers(['test', 'test2', 'test3'], 1.5)};

        expect(actual).to.throw(Error, 'Invalid input!');
    });

    it('sellFlowers function should throw error when 2nd given parameter is negative number', () => {
        let actual = () => {flowerShop.sellFlowers(['test', 'test2', 'test3'], -1)};

        expect(actual).to.throw(Error, 'Invalid input!');
    });

    it('sellFlowers function should throw error when 2nd given parameter is bigger than given array lenght', () => {
        let actual = () => {flowerShop.sellFlowers(['test', 'test2', 'test3'], 4)};

        expect(actual).to.throw(Error, 'Invalid input!');
    });

    it('sellFlowers function should throw error when 2nd given parameter is equal to given array lenght', () => {
        let actual = () => {flowerShop.sellFlowers(['test', 'test2', 'test3'], 3)};

        expect(actual).to.throw(Error, 'Invalid input!');
    });

    it('sellFlowers function should return correct message when 2nd parameter is with value equal to max lenght of given array minus 1', () => {
        let expected = ['test', 'test2'].join(' / ');
        let actual = flowerShop.sellFlowers(['test', 'test2', 'test3'], 2);

        expect(actual).to.be.equal(expected);
    });

    it('sellFlowers function should return correct message when 2nd parameter is equal to zero', () => {
        let expected = ['test2', 'test3'].join(' / ');
        let actual = flowerShop.sellFlowers(['test', 'test2', 'test3'], 0);

        expect(actual).to.be.equal(expected);
    });
})