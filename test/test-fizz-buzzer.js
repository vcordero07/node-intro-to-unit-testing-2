const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', () => {

  it('should return "fizz-buzz" for multiples of 15', () => {
    [15, 30, 45].forEach((input) => {
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });

  it('should return "fizz" for multiples of 3', () => {
    [3, 6, 9, 12].forEach((input) => {
      fizzBuzzer(input).should.equal('fizz');
    });
  });

  it('should return "buzz" for multiples of 5', () => {
    [5, 10, 20].forEach((input) => {
      fizzBuzzer(input).should.equal('buzz');
    });
  });

  it('should return number if not mul of 3 or 5', () => {
    [1, 2, 4, 7].forEach((input) => {
      fizzBuzzer(input).should.equal(input);
    });
  });

  it('should produce error if input isn\'t number', () => {
    const badInputs = [true, false, 'cat', () => {}, [1, 2, 3]]
    badInputs.forEach((input) => {
      ( () => {
        fizzBuzzer(input)
      }).should.throw(Error);
    });
  });

});
