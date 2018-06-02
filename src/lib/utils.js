/*eslint no-new-wrappers: 0*/

/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
export function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

export function clone(target, source) {
  for (let key in source) {
    // Use getOwnPropertyDescriptor instead of source[key] to prevent from trigering setter/getter.
    let descriptor = Object.getOwnPropertyDescriptor(source, key);
    if (descriptor.value instanceof String) {
      target[key] = new String(descriptor.value);
    } else if (descriptor.value instanceof Array) {
      target[key] = clone([], descriptor.value);
    } else if (descriptor.value instanceof Object) {
      let prototype = Reflect.getPrototypeOf(descriptor.value);
      let cloneObject = clone({}, descriptor.value);
      Reflect.setPrototypeOf(cloneObject, prototype);
      target[key] = cloneObject;
    } else {
      Object.defineProperty(target, key, descriptor);
    }
  }
  let prototype = Reflect.getPrototypeOf(source);
  Reflect.setPrototypeOf(target, prototype);
  return target;
}

export function truncate(string = '', length = 0) {
  if (string.length > length) return string.substring(0, length) + '…';
  return string;
}
