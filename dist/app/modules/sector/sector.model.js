"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sector = void 0;
const mongoose_1 = require("mongoose");
const SectorSchema = new mongoose_1.Schema({
    tag: {
        type: String,
        required: true,
        unique: true,
    },
    options: [
        {
            value: {
                type: Number,
                required: true,
                unique: true,
            },
            data: {
                type: String,
                required: true,
            },
        },
    ],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Sector = (0, mongoose_1.model)('Sector', SectorSchema);
