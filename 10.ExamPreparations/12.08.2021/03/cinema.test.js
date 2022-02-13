const cinema = require('./cinema');
const expect = require('chai').expect;

describe('Cinema object testing:', () => {

    it('Should have 3 function properties.', () => {
        let actual = cinema;

        expect(actual).to.haveOwnProperty('showMovies').to.be.a('function');
        expect(actual).to.haveOwnProperty('ticketPrice').to.be.a('function');
        expect(actual).to.haveOwnProperty('swapSeatsInHall').to.be.a('function');
    });

    it('Function showMovies should return message that no movies when parameter is empty array', () => {
        let expected = 'There are currently no movies to show.';
        let actual = cinema.showMovies([]);

        expect(actual).to.be.equal(expected);
    });

    it('Function showMovies should return TypeError when parameter is undefined', () => {
        let expected = 'There are currently no movies to show.';
        let actual = () => {cinema.showMovies()};

        expect(actual).to.throw(TypeError, "Cannot read properties of undefined (reading 'length')");
    });

    it('Function showMovies should return correct message when array of movies is given', () => {
        let expected = ['Batman', 'Spiderman'].join(', ');
        let actual = cinema.showMovies(['Batman', 'Spiderman']);

        expect(actual).to.be.equal(expected);
    });

    it('Function showMovies should return TypeError when string is given', () => {
        let actual = () => {cinema.showMovies('text')};
        expect(actual).to.throw(TypeError, 'movieArr.join is not a function');
    });

    it('ticketPrice function should throw error when projectionType does not existing', () => {
        let actual = () => {cinema.ticketPrice('non-existing projection type')};
        expect(actual).to.throw(Error, 'Invalid projection type.');
    });

    it('ticketPrice function should throw error when given parameter is empty string', () => {
        let actual = () => {cinema.ticketPrice('')};
        expect(actual).to.throw(Error, 'Invalid projection type.');
    });

    it('ticketPrice function should throw error when given parameter is number', () => {
        let actual = () => {cinema.ticketPrice(15)};
        expect(actual).to.throw(Error, 'Invalid projection type.');
    });

    it('ticketPrice function should throw error when given parameter is object', () => {
        let actual = () => {cinema.ticketPrice({})};
        expect(actual).to.throw(Error, 'Invalid projection type.');
    });

    it('ticketPrice function should throw error when given parameter is array', () => {
        let actual = () => {cinema.ticketPrice([])};
        expect(actual).to.throw(Error, 'Invalid projection type.');
    });

    it('ticketPrice function parameter shoul me case sensitive', () => {
        let actual = () => {cinema.ticketPrice('Premiere'.toUpperCase())};
        expect(actual).to.throw(Error, 'Invalid projection type.');
    });

    it('ticketPrice function should return correct price when givem parameter value is Premiere', () => {
        let expected = 12.00;
        let actual = cinema.ticketPrice('Premiere');
        expect(actual).to.be.equal(expected)
    });

    it('ticketPrice function should return correct price when givem parameter value is Normal', () => {
        let expected = 7.50;
        let actual = cinema.ticketPrice('Normal');
        expect(actual).to.be.equal(expected)
    });

    it('ticketPrice function should return correct price when givem parameter value is Discount', () => {
        let expected = 5.50;
        let actual = cinema.ticketPrice('Discount');
        expect(actual).to.be.equal(expected)
    });

    it('swapSeatsInHall function should return error message when 1st parameter is string', () => {
        let expected = "Unsuccessful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall('test', 15);

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return error message when 1st parameter is number in string format', () => {
        let expected = "Unsuccessful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall('15', 15);

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return error message when 1st parameter is real number', () => {
        let expected = "Unsuccessful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(15.5, 15);

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return error message when 1st parameter is negative number', () => {
        let expected = "Unsuccessful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(-15, 15);

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return error message when 1st parameter is equal to zero', () => {
        let expected = "Unsuccessful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(0, 15);

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return error message when 1st parameter is bigger than 20', () => {
        let expected = "Unsuccessful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(21, 15);

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return error message when 1st parameter is equal to second parameter', () => {
        let expected = "Unsuccessful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(15, 15);

        expect(actual).to.be.equal(expected);
    });

    //second
    it('swapSeatsInHall function should return error message when 2nd parameter is string', () => {
        let expected = "Unsuccessful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(15, 'test');

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return error message when 2nd parameter is number in string format', () => {
        let expected = "Unsuccessful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(15, '15');

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return error message when 2nd parameter is real number', () => {
        let expected = "Unsuccessful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(15, 15.5);

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return error message when 2nd parameter is negative number', () => {
        let expected = "Unsuccessful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(15, -15);

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return error message when 2nd parameter is equal to zero', () => {
        let expected = "Unsuccessful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(15, 0);

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return error message when 2nd parameter is bigger than 20', () => {
        let expected = "Unsuccessful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(15, 21);

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return expected message when both parameters meet the required conditions', () => {
        let expected = "Successful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(15, 18);

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return expected message when both parameters meet the required conditions (edge cases for 1st parameter - value 1)', () => {
        let expected = "Successful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(1, 18);

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return expected message when both parameters meet the required conditions (edge cases for 1st parameter - value 20)', () => {
        let expected = "Successful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(20, 18);

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return expected message when both parameters meet the required conditions (edge cases for 2nd parameter - value 1)', () => {
        let expected = "Successful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(15, 1);

        expect(actual).to.be.equal(expected);
    });

    it('swapSeatsInHall function should return expected message when both parameters meet the required conditions (edge cases for 2nd parameter - value 20)', () => {
        let expected = "Successful change of seats in the hall.";
        let actual = cinema.swapSeatsInHall(15, 20);

        expect(actual).to.be.equal(expected);
    });
})