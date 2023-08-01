import { ISector } from './sector.interface';
import { Sector } from './sector.model';

const createSector = async (payload: ISector): Promise<ISector | null> => {
  const result = await Sector.create(payload);

  return result;
};

const getAllSector = async (): Promise<ISector[] | null> => {
  const result = await Sector.find({});

  return result;
};

export const SectorService = {
  createSector,
  getAllSector,
};
