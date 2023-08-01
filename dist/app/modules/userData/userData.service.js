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
exports.UserDataService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const userData_model_1 = require("./userData.model");
const createUserData = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = userData;
    const isExist = yield userData_model_1.UserData.findOne({ user });
    if (isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_ACCEPTABLE, 'Already submited...!');
    }
    const result = yield userData_model_1.UserData.create(userData);
    return result;
});
const getUserData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userData_model_1.UserData.findOne({ user: id });
    return result;
});
const updateUserData = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userData_model_1.UserData.findOneAndUpdate({ user: id }, payload, {
        new: true,
    });
    return result;
});
exports.UserDataService = {
    createUserData,
    getUserData,
    updateUserData,
};
