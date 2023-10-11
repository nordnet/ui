import { getAriaProps } from './utils';

test('common utils', () => {
  expect(
    getAriaProps({
      'aria-hidden': true,
      'aria-labelledby': 'id1',
      // shouldn't be picked
      'asdaria-hidden': false,
      somethingElse: true,
      more: 1,
    }),
  ).toEqual({ 'aria-hidden': true, 'aria-labelledby': 'id1' });
});
