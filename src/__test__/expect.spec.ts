test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('regexp', () => {
  expect('haha').not.toMatch(/I/)
})

test('array', () => {
  const arr = [1, 2, 3]
  expect(arr).toContain(1)
})
