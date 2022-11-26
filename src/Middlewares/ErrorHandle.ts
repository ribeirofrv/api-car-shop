import { NextFunction, Request, Response } from 'express';
import CustomError from '../Errors/CustomError';

export default class ErrorHandler {
  public static handle(
    error: CustomError,
    _request: Request,
    response: Response,
    _next: NextFunction,
  ) {
    const { status, message } = error;
    if (status) {
      return response.status(status).json({ message });
    }
    return response.status(500).json({ message });
  }
}
