"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const userData_service_1 = require("./userData.service");
const createUserData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const data = Object.assign({ user: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a._id }, req.body);
    const result = yield userData_service_1.UserDataService.createUserData(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User data created successfully !',
        data: result,
    });
}));
const getUserData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const result = yield userData_service_1.UserDataService.getUserData((_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b._id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User data retrieved successfully !',
        data: result,
    });
}));
const updateUserData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const result = yield userData_service_1.UserDataService.updateUserData((_c = req === null || req === void 0 ? void 0 : req.user) === null || _c === void 0 ? void 0 : _c._id, req === null || req === void 0 ? void 0 : req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User data upadte successfully !',
        data: result,
    });
}));
exports.UserDataController = {
    createUserData,
    getUserData,
    updateUserData,
};
