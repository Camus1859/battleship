import { functions } from '../tests/name';

test('Adds 2 plus 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});
