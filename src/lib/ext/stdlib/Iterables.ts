import { Require } from "$lib/ext/stdlib/Require"

/**
 * Extensions of {@link Iterable}s.
 */
export namespace Iterables {
  /**
   * Returns an {@link IteratorObject} that cycles through the elements in the array forever.
   *
   * Requires that {@link elements} must not be empty.
   */
  export function cycle<T>(...elements: T[]): IteratorObject<T, T> {
    Require.notEmpty(elements)
    const firstIndex = 0
    const lastIndex = elements.length - 1

    return Iterator.from({
      *[Symbol.iterator](): Generator<T, T> {
        for (let i = firstIndex; true; i = i === lastIndex ? firstIndex : i + 1) {
          yield elements[i]!
        }
      },
    }) as IteratorObject<T, T>
  }
}
