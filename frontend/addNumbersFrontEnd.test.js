const { addNumbers } = require('./addNumbersFrontEnd');

test('adds numbers', () => {
  expect(addNumbers(1, 1)).toBe(2);
});
