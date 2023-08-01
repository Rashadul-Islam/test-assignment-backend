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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectorService = void 0;
const sector_model_1 = require("./sector.model");
const createSector = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield sector_model_1.Sector.create(payload);
    return result;
});
const getAllSector = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield sector_model_1.Sector.find({});
    return result;
});
exports.SectorService = {
    createSector,
    getAllSector,
};
