'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.errorLogger = exports.logger = void 0;
const winston_1 = require('winston');
const { combine, timestamp, label, printf, prettyPrint } = winston_1.format;
//custom log format
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${date.toDateString()} ${hours}:${minutes}:${seconds} [${label}] ${level}: ${message}`;
});
const logger = (0, winston_1.createLogger)({
  level: 'info',
  format: combine(
    label({ label: 'Test-Assignment' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  transports: [new winston_1.transports.Console()],
});
exports.logger = logger;
const errorLogger = (0, winston_1.createLogger)({
  level: 'error',
  format: combine(
    label({ label: 'Test-Assignment' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  transports: [new winston_1.transports.Console()],
});
exports.errorLogger = errorLogger;
