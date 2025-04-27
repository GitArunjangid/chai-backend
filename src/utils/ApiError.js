class ApiError extends Error {
  constructor(
    message="Somthing went wrong", 
    statusCode,
    errors = [],
    statck = ""
) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
    this.isOperational = true;

    if(statck) {
      this.stack = statck;
    }else {
        Error.captureStackTrace(this, this.constructor);
    }


    // Error.captureStackTrace(this, this.constructor);
  }
}

export {ApiError};