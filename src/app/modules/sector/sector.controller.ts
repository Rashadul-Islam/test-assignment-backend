import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { SectorService } from './sector.service';
import sendResponse from '../../../shared/sendResponse';
import { ISector } from './sector.interface';

const createSector = catchAsync(async (req: Request, res: Response) => {
  const result = await SectorService.createSector(req.body);
  sendResponse<ISector>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sector created successfully',
    data: result,
  });
});

const getAllSector = catchAsync(async (req: Request, res: Response) => {
  const result = await SectorService.getAllSector();
  sendResponse<ISector[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sector retrieved successfully',
    data: result,
  });
});

export const SectorController = {
  createSector,
  getAllSector,
};
