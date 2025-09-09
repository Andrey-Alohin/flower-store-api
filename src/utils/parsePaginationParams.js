import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from '../constants/defaults.js';

const parseNumber = (value, defaultValue) => {
  if (value === undefined) return defaultValue;

  const parsedNumber = Number(value);

  return Number.isNaN(parsedNumber) ? defaultValue : parsedNumber;
};

export const parsePaginationParams = (
  query,
  defPage = DEFAULT_PAGE,
  defPerPage = DEFAULT_PER_PAGE,
) => {
  const { page, perPage } = query;

  const parsedPage = parseNumber(page, defPage);
  const parsedPerPage = parseNumber(perPage, defPerPage);

  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};
