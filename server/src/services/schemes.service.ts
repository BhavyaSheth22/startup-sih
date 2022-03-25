import { CreateSchemeDto } from '@dtos/schemes.dto';
import { HttpException } from '@exceptions/HttpException';
import { Scheme } from '@interfaces/schemes.interface';
import schemeModel from '@models/schemes.model';
import { isEmpty } from '@utils/util';

class SchemeService {
  public schemes = schemeModel;

  public async findAllScheme(): Promise<Scheme[]> {
    const schemes: Scheme[] = await this.schemes.find();
    return schemes;
  }

  public async findSchemeById(schemeId: string): Promise<Scheme> {
    if (isEmpty(schemeId)) throw new HttpException(400, 'Enter a valid schemeId');

    const findScheme: Scheme = await this.schemes.findOne({ _id: schemeId });
    if (!findScheme) throw new HttpException(409, 'No Scheme found');

    return findScheme;
  }

  public async createScheme(schemeData: CreateSchemeDto): Promise<Scheme> {
    if (isEmpty(schemeData)) throw new HttpException(400, 'Enter valid scheme details');

    const findScheme: Scheme = await this.schemes.findOne({ name: schemeData.name });
    if (findScheme) throw new HttpException(409, `This scheme ${schemeData.name} already exists`);

    const createSchemeData: Scheme = await this.schemes.create({ ...schemeData });

    return createSchemeData;
  }
}

export default SchemeService;
