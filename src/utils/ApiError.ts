class ApiError extends Error {
  public success: boolean;
  public statusCode: number;
  public message: string;

  constructor(statusCode: number, message: string = "Something went wrong") {
    super(message);
    this.success = false;
    this.statusCode = statusCode;
    this.message = message;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
