import { Schema, model } from 'mongoose';
import { ISector, SectorModel } from './sector.interface';

const SectorSchema = new Schema<ISector, SectorModel>(
  {
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Sector = model<ISector, SectorModel>('Sector', SectorSchema);
