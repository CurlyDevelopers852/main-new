import { test } from 'vitest';
import { quoteDoubleToSingle } from '../../src/utils';

test('replaces double quotes with single quotes', ({ expect }) => {
  const message = 'Hello, "world"';
  const expected = "Hello, 'world'";
  const actual = quoteDoubleToSingle(message);

  expect(actual).toBe(expected);
});

test('leaves message unchanged when there are no double quotes', ({ expect }) => {
  const message = 'Hello, world';
  const expected = 'Hello, world';
  const actual = quoteDoubleToSingle(message);

  expect(actual).toBe(expected);
});
