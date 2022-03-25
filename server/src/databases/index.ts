import { DB_STRING } from '@config';

export const dbConnection = {
  url: `${DB_STRING}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
