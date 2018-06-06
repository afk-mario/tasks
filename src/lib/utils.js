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

export function getElapsedTime(
  baseTime,
  startedAt,
  stoppedAt = new Date().getTime(),
) {
  if (!startedAt) {
    return 0;
  } else {
    return stoppedAt - startedAt + baseTime;
  }
}

export function getSeconds(input) {
  return input / 1000;
}

export function formatSeconds(input, separator) {
  const seconds = getSeconds(input);
  let pad = function(input) {
    return input < 10 ? '0' + input : input;
  };
  return [
    pad(Math.floor(seconds / 3600)),
    pad(Math.floor((seconds % 3600) / 60)),
    pad(Math.floor(seconds % 60)),
  ].join(typeof separator !== 'undefined' ? separator : ':');
}

export function twoDecimals(input) {
  return Math.round(input * 100) / 100;
}

export function getHoursMinsValue(value, maxHours, maxMinutes) {
  /* const time = value.split(colon) || [0, 0]; */

  let minutes = parseInt(value, 10);
  const hours = minutes / 60;
  minutes %= 60;

  const hoursClamped = clamp(parseInt(hours, 10), 0, maxHours);
  const minutesClamped =
    hoursClamped < maxHours ? clamp(parseInt(minutes, 10), 0, maxMinutes) : 0;

  const hoursFmt = hoursClamped.toString().padStart(2, '0');
  const minutesFmt = minutesClamped.toString().padStart(2, '0');

  return [hoursFmt, minutesFmt];
}
