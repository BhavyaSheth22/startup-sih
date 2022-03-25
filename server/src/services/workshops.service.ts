import { CreateWorkshopDto } from '@dtos/workshops.dto';
import { HttpException } from '@exceptions/HttpException';
import { Workshop } from '@interfaces/workshops.interface';
import workshopModel from '@models/workshops.model';
import { isEmpty } from '@utils/util';

class WorkshopService {
  public workshops = workshopModel;

  public async findAllWorkshops(): Promise<Workshop[]> {
    const workshops: Workshop[] = await this.workshops.find();
    return workshops;
  }

  public async findWorkshopById(workshopId: string): Promise<Workshop> {
    if (isEmpty(workshopId)) throw new HttpException(400, 'Enter a valid workshop Id');

    const findWorkshop: Workshop = await this.workshops.findOne({ _id: workshopId });
    if (!findWorkshop) throw new HttpException(409, 'No workshop found');

    return findWorkshop;
  }

  public async createWorkshop(workshopData: CreateWorkshopDto): Promise<Workshop> {
    if (isEmpty(workshopData)) throw new HttpException(400, 'Please provide workshop details');

    const findWorkshop: Workshop = await this.workshops.findOne({ name: workshopData.name });
    if (findWorkshop) throw new HttpException(409, `The workshop ${workshopData.name} already exists`);

    const createWorkshopData: Workshop = await this.workshops.create({ ...workshopData });

    return createWorkshopData;
  }
}

export default WorkshopService;
