export const START_TIMER = 'START_TIMER';
export function startTimer(baseTime = 0, pk) {
  return {
    type: START_TIMER,
    baseTime: baseTime,
    now: new Date().getTime(),
    pk,
  };
}

export const STOP_TIMER = 'STOP_TIMER';
export function stopTimer() {
  return {
    type: STOP_TIMER,
    now: new Date().getTime(),
  };
}

export const RESET_TIMER = 'RESET_TIMER';
export function resetTimer() {
  return {
    type: RESET_TIMER,
    now: new Date().getTime(),
  };
}

export const CLEAR_TIMER = 'CLEAR_TIMER';
export function clearTimer() {
  return {
    type: CLEAR_TIMER,
  };
}
