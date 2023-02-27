import { HttpStatusCode } from '@/constants/http-status-code'

export class ApiError extends Error {
  readonly statusCode: number;

  constructor (
    message: string,
    statusCode: keyof typeof HttpStatusCode,
  ) {
    super()
    this.statusCode = HttpStatusCode[statusCode]
    this.message = message
  }
}

export function getExceptionStatus(
  exception: unknown
) {
  return exception instanceof ApiError
    ? exception.statusCode
    : HttpStatusCode.InternalServerError;
}

export function getExceptionMessage(
  exception: unknown
) {
  return isError(exception) ?
    exception.message : `Internal Server Error`;
}

export function getExceptionStack(
  exception: unknown
) {
  return isError(exception) ?
    exception.stack : undefined;
}

export function isError(
  exception: unknown
): exception is Error {
  return exception instanceof Error;
}