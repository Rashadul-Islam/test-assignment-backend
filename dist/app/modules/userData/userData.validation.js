'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserDataValidation = void 0;
const zod_1 = require('zod');
const createUserDataZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    user: zod_1.z.string().optional(),
    name: zod_1.z.string({
      required_error: 'Name is required',
    }),
    sector: zod_1.z.array(
      zod_1.z.string({
        required_error: 'Sector is required',
      })
    ),
    agreeTerms: zod_1.z.boolean(
      zod_1.z.string({
        required_error: 'agreeTerms is required',
      })
    ),
  }),
});
const updateUserDataZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    user: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    sector: zod_1.z.array(zod_1.z.string()).optional(),
    agreeTerms: zod_1.z.boolean().optional(),
  }),
});
exports.UserDataValidation = {
  createUserDataZodSchema,
  updateUserDataZodSchema,
};
