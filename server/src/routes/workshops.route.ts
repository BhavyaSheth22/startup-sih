import { Router } from 'express';
import WorkshopsController from '@controllers/workshops.controller';
import { CreateWorkshopDto } from '@dtos/workshops.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class WorkshopsRoute implements Routes {
  public path = '/users';
  public router = Router();
  public usersController = new WorkshopsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getWorkshops);
    this.router.get(`${this.path}/:id`, this.usersController.getWorkshopById);
    this.router.post(`${this.path}`, validationMiddleware(CreateWorkshopDto, 'body'), this.usersController.createWorkshop);
  }
}

export default WorkshopsRoute;
