/**
 * Extensions for requirements / prerequisites.
 */
export namespace Require {
  /**
   * Asserts that {@link array} is not empty.
   */
  export function notEmpty<T>(array: readonly T[]): void {
    if (array.length === 0) {
      throw new Error(`${array.toString()} is empty`)
    }
  }
}
