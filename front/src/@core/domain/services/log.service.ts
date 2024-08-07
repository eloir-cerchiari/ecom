export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3,
  TRACE = 4,
}

export abstract class LogService {
  constructor(protected level: LogLevel = LogLevel.INFO) {}
  abstract info(message: string): void;
  abstract error(message: string): void;
  abstract warn(message: string): void;
  abstract debug(message: string): void;
  abstract trace(message: string): void;
}
