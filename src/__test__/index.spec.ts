import { add, minus } from '../index'

/**
 * describe可以作为一个测试块，创建一个独立的作用域
 */
describe('arithmetic', () => {
  it('add', () => {
    expect(add(1, 2)).toBe(3)
  })

  it('minus', () => {
    expect(minus(1, 2)).toBe(-1)
  })
})
