const { addNumbers } = require('./addNumbersBackEnd');

test('adds numbers', () => {
  expect(addNumbers(1,1)).toBe(2);
})
