import { z } from 'zod';

const createUserDataZodSchema = z.object({
  body: z.object({
    user: z.string().optional(),
    name: z.string({
      required_error: 'Name is required',
    }),
    sector: z.array(
      z.string({
        required_error: 'Sector is required',
      })
    ),
    agreeTerms: z.boolean(
      z.string({
        required_error: 'agreeTerms is required',
      })
    ),
  }),
});

const updateUserDataZodSchema = z.object({
  body: z.object({
    user: z.string().optional(),
    name: z.string().optional(),
    sector: z.array(z.string()).optional(),
    agreeTerms: z.boolean().optional(),
  }),
});

export const UserDataValidation = {
  createUserDataZodSchema,
  updateUserDataZodSchema,
};
