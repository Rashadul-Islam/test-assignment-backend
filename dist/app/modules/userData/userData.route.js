'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserDataRoutes = void 0;
const express_1 = __importDefault(require('express'));
const validateRequest_1 = __importDefault(
  require('../../middlewares/validateRequest')
);
const userData_validation_1 = require('./userData.validation');
const userData_controller_1 = require('./userData.controller');
const auth_1 = __importDefault(require('../../middlewares/auth'));
const router = express_1.default.Router();
router.post(
  '/create-user-data',
  (0, validateRequest_1.default)(
    userData_validation_1.UserDataValidation.createUserDataZodSchema
  ),
  (0, auth_1.default)(),
  userData_controller_1.UserDataController.createUserData
);
router.patch(
  '/update-user-data',
  (0, validateRequest_1.default)(
    userData_validation_1.UserDataValidation.createUserDataZodSchema
  ),
  (0, auth_1.default)(),
  userData_controller_1.UserDataController.updateUserData
);
router.get(
  '/',
  (0, auth_1.default)(),
  userData_controller_1.UserDataController.getUserData
);
exports.UserDataRoutes = router;
