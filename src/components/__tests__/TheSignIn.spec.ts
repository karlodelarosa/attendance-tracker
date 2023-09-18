import { expect, test } from 'bun:test'
import { hoursToMinutes } from '../../js/composable/calculation'

test('Code expirations', () => {
  const mock = hoursToMinutes(1)
  const expected = 60

  expect(mock).toBe(expected)
})
