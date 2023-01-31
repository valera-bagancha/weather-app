export interface IError {
  message: string;
  stack: string;
}

export interface IErrorMessage {
  response: {
    data: string;
  }
}

export interface IErrorMessageForecast {
  response: {
    data: {
      error: {
        message: string;
      }
    };
  }
}
