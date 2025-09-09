import { DEFAULT_SORT_BY, DEFAULT_SORT_ORDER } from '../constants/defaults.js';
import { SORT_BY } from '../constants/flowers.js';
import { SORT_ORDER } from '../constants/index.js';

const parseSortBy = (value, defaultValue) => {
  if (typeof value !== 'string') return defaultValue;

  const parsedString = value.toLowerCase();

  return SORT_BY.includes(parsedString) ? parsedString : defaultValue;
};
const parseSortOrder = (value, defaultValue) => {
  if (typeof value !== 'string') return defaultValue;

  const parsedString = value.toLowerCase();

  return Object.values(SORT_ORDER).includes(parsedString)
    ? parsedString
    : defaultValue;
};

export const parseSortParams = (query) => {
  const { sortBy, sortOrder } = query;

  const parsedSortBy = parseSortBy(sortBy, DEFAULT_SORT_BY);
  const parsedSortOrder = parseSortOrder(sortOrder, DEFAULT_SORT_ORDER);

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};
