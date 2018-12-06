import get from '../../src/arguments/get';

test('get empty arguments', () => {
  expect(get()).toEqual({});
});
