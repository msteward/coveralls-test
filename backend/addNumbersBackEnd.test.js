const { addNumbers, multiplyNumbers } = require('./addNumbersBackEnd');

test('adds numbers', () => {
  expect(addNumbers(1,1)).toBe(2);
})
test('multiply numbers', () => {
  expect(multiplyNumbers(2,2)).toBe(4);
})
