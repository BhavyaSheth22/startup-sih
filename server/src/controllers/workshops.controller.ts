import { NextFunction, Request, Response } from 'express';
import { CreateWorkshopDto } from '@dtos/workshops.dto';
import { Workshop } from '@interfaces/workshops.interface';
import workshopService from '@services/workshops.service';

class WorkshopsController {
  public workshopService = new workshopService();

  public getWorkshops = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllWorkshopsData: Workshop[] = await this.workshopService.findAllWorkshops();

      res.status(200).json({ data: findAllWorkshopsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getWorkshopById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const workshopId: string = req.params.id;
      const findOneWorkshopData: Workshop = await this.workshopService.findWorkshopById(workshopId);

      res.status(200).json({ data: findOneWorkshopData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createWorkshop = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const workshopData: CreateWorkshopDto = req.body;
      const createWorkshopData: Workshop = await this.workshopService.createWorkshop(workshopData);

      res.status(201).json({ data: createWorkshopData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default WorkshopsController;
