"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectorValidation = void 0;
const zod_1 = require("zod");
const createSectorZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        tag: zod_1.z.string({
            required_error: 'Tag is required',
        }),
        options: zod_1.z.array(zod_1.z.object({
            value: zod_1.z.number({
                required_error: 'Value is required',
            }),
            data: zod_1.z.string({
                required_error: 'Data is required',
            }),
        })),
    }),
});
exports.SectorValidation = {
    createSectorZodSchema,
};
