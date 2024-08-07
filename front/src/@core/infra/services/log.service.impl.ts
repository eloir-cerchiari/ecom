import { LogService, LogLevel } from 'src/@core/domain/services/log.service';

export class LogServiceImpl extends LogService {
  private currentDateTime(): string {
    return new Date().toISOString();
  }
  info(message: string): void {
    if (this.level >= LogLevel.INFO) {
      console.log(`${this.currentDateTime()} [INFO] ${message}`);
    }
  }
  error(message: string): void {
    if (this.level >= LogLevel.ERROR) {
      console.error(`${this.currentDateTime()} [ERROR] ${message}`);
    }
  }
  warn(message: string): void {
    if (this.level >= LogLevel.WARN) {
      console.warn(`${this.currentDateTime()} [WARN] ${message}`);
    }
  }
  debug(message: string): void {
    if (this.level >= LogLevel.DEBUG) {
      console.debug(`${this.currentDateTime()} [DEBUG] ${message}`);
    }
  }
  trace(message: string): void {
    if (this.level >= LogLevel.TRACE) {
      console.trace(`${this.currentDateTime()} [TRACE] ${message}`);
    }
  }
}
