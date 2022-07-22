import { add, minus } from '../index'

describe('arithmetic', () => {
  it('add', () => {
    expect(add(1, 2)).toBe(3)
  })

  it('minus', () => {
    expect(minus(1, 2)).toBe(-1)
  })
})
