'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const http_status_1 = __importDefault(require('http-status'));
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const handleCastError = error => {
  const errors = [{ path: error.path, message: 'Invalid Id' }];
  const statusCode = http_status_1.default.BAD_REQUEST;
  return {
    statusCode,
    message: 'Cast Error',
    errorMessages: errors,
  };
};
exports.default = handleCastError;
