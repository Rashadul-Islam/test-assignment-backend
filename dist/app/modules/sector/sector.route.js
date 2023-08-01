"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectorRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const sector_validation_1 = require("./sector.validation");
const sector_controller_1 = require("./sector.controller");
const router = express_1.default.Router();
router.post('/create-sector', (0, validateRequest_1.default)(sector_validation_1.SectorValidation.createSectorZodSchema), (0, auth_1.default)(), sector_controller_1.SectorController.createSector);
router.get('/', (0, auth_1.default)(), sector_controller_1.SectorController.getAllSector);
exports.SectorRoutes = router;
