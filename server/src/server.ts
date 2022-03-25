import App from '@/app';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import PostRoute from './routes/posts.routes';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new PostRoute()]);

app.listen();
