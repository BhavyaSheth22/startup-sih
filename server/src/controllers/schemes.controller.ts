import { NextFunction, Request, Response } from 'express';
import { CreateSchemeDto } from '@dtos/schemes.dto';
import { Scheme } from '@interfaces/schemes.interface';
import schemeService from '@services/schemes.service';

class SchemesController {
  public schemeService = new schemeService();

  public getSchemes = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllSchemesData: Scheme[] = await this.schemeService.findAllScheme();

      res.status(200).json({ data: findAllSchemesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getSchemeById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const schemeId: string = req.params.id;
      const findOneSchemeData: Scheme = await this.schemeService.findSchemeById(schemeId);

      res.status(200).json({ data: findOneSchemeData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createScheme = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const schemeData: CreateSchemeDto = req.body;
      const createSchemeData: Scheme = await this.schemeService.createScheme(schemeData);

      res.status(201).json({ data: createSchemeData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default SchemesController;
