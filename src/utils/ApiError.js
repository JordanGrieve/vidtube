class ApiError extends Error {
  constructor(
    StatusCode,
    message = "Something went wrong",
    error = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = StatusCode;
    this.success = false; // Indicates that this is an error response
    this.error = error; // Array of errors, if any
    this.stack = stack; // Stack trace for debugging
    this.message = message; // Custom error message

    if (stack) {
      this.stack = stack; // Include stack trace if provided
    } else {
      Error.captureStackTrace(this, this.constructor); // Capture stack trace if not provided
    }
  }
}

export { ApiError };
