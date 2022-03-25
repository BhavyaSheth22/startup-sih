import { Router } from 'express';
import SchemesController from '@controllers/schemes.controller';
import { CreateSchemeDto } from '@dtos/schemes.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class SchemesRoute implements Routes {
  public path = '/schemes';
  public router = Router();
  public usersController = new SchemesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getSchemes);
    this.router.post(`${this.path}`, validationMiddleware(CreateSchemeDto, 'body'), this.usersController.createScheme);
  }
}

export default SchemesRoute;
