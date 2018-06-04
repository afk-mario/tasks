import { twoDecimals } from '../../lib/utils';
import {
  FILTER_NONE,
  FILTER_SHORT,
  FILTER_MEDIUM,
  FILTER_LONG,
  FILTER_COMPLETE,
  FILTER_IDLE,
  FILTER_STARTED,
} from '../filter/filters';

export const filterTasks = (tasks, filter, active) => {
  switch (filter.value) {
    case FILTER_NONE:
      return tasks.filter(item => item.status !== 'CMP' && item.pk !== active);
    case FILTER_SHORT:
      return tasks.filter(
        item => item.duration > 0 && item.duration <= 30 && item.pk !== active,
      );
    case FILTER_MEDIUM:
      return tasks.filter(
        item => item.duration > 30 && item.duration <= 60 && item.pk !== active,
      );
    case FILTER_LONG:
      return tasks.filter(item => item.duration > 60 && item.pk !== active);
    case FILTER_COMPLETE:
      return tasks.filter(item => item.status === 'CMP' && item.pk !== active);
    case FILTER_STARTED:
      return tasks.filter(item => item.status === 'SRT' && item.pk !== active);
    case FILTER_IDLE:
      return tasks.filter(item => item.status === 'IDL' && item.pk !== active);
    default:
      break;
  }
};

export const getPorcentage = task => {
  const minutes = task.timeDone / 60;
  const porcentage = twoDecimals((minutes * 100) / task.duration);
  return porcentage;
};

export const getPorcentages = arr => arr.map(item => getPorcentage(item));
