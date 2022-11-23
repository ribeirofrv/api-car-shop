import { NextFunction, Request, Response } from 'express';

export default class ErrorHandler {
  public static handle(
    error: Error,
    _request: Request,
    response: Response,
    _next: NextFunction,
  ) {
    return response.status(500).json({ message: error.message });
  }
}
