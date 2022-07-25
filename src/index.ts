export function add (a: number, b: number): number {
  return a + b
}

export function minus (a: number, b: number): number {
  return a - b
}

export function fetchData(data: unknown) {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), 500)
  })
}

export function forEach(items: any[], callback: (item: any) => void) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}
