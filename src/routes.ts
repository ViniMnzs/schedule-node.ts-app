import {Router} from 'express';
import ScheduleController from './controllers/ScheduleController';

const routes = Router();

routes.get('/', ScheduleController.index);
routes.get('/show/:id', ScheduleController.show);
routes.post('/create', ScheduleController.create);
routes.delete('/delete/:id', ScheduleController.delete);
routes.put('/edit/:id', ScheduleController.edit);


export default routes;