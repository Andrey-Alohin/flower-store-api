import createHttpError from 'http-errors';

export const throwIfNull = (code, message) => (res) => {
  if (!res) throw createHttpError(code, message);
  return res;
};
