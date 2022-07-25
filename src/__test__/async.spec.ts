import { fetchData } from '../index'

test('the data is peanut butter', async () => {
  const data = await fetchData('peanut butter')
  expect(data).toBe('peanut butter')
})

test('the fetch fails with an error', async () => {
  expect.assertions(0)
  try {
    await fetchData('haha');
  } catch (e) {
    expect(e).toMatch('error')
  }
})
