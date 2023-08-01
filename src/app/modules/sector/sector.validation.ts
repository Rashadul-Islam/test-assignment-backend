import { z } from 'zod';

const createSectorZodSchema = z.object({
  body: z.object({
    tag: z.string({
      required_error: 'Tag is required',
    }),
    options: z.array(
      z.object({
        value: z.number({
          required_error: 'Value is required',
        }),
        data: z.string({
          required_error: 'Data is required',
        }),
      })
    ),
  }),
});

export const SectorValidation = {
  createSectorZodSchema,
};
