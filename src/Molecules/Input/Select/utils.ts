export const noop = (_: any) => _;
export function* createCounter(init = 0, step = 1) {
  let x = init;
  while (true) {
    yield x;
    x += step;
  }
}
