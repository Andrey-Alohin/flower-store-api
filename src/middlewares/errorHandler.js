import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res, next) => {
  if (error instanceof HttpError) {
    return res.status(error.status).json({
      status: error.status,
      ...error,
    });
  }

  console.log(error, 'Error');

  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
  });
};
