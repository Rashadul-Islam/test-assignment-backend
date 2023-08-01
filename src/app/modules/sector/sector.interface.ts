import { Model } from 'mongoose';

export type ISector = {
  tag: string;
  options: { value: number; data: string }[];
};

export type SectorModel = Model<ISector, Record<string, unknown>>;
