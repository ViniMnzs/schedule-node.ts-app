import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Schedule } from '../models/Schedule';
import scheduleView from '../views/schedule_view';

export default {
    async show(request:Request, response:Response){
        const id = request.params.id;
        const scheduleRepository = getRepository(Schedule);
        const schedule: any = await scheduleRepository.findOne(id);
        return response.json(scheduleView.render(schedule));
    },

    async index(request:Request, response:Response){
        const scheduleRepository = getRepository(Schedule);
        const schedule = await scheduleRepository.find();
        return response.json(scheduleView.renderMany(schedule));
    },

    async delete(request:Request, response:Response){
        const id = request.params.id;
        const scheduleRepository = getRepository(Schedule);
        await scheduleRepository.delete(id);
        return response.json({message: "Usuário deletado com sucesso"});

    },

    async edit(request:Request, response:Response){
        const id = request.params.id;
        const newSchedule = request.body;
        const scheduleRepository = getRepository(Schedule);
        const oldSchedule: any = await scheduleRepository.findOne({id: id});

        scheduleRepository.merge(oldSchedule, newSchedule);

        await scheduleRepository.save(oldSchedule);
        return response.json({message: "Usuário editado com sucesso"});

    },

    async create(request: Request, response: Response) {
        const { patient, doctor, date } = request.body;

        const scheduleRepository = getRepository(Schedule);
				
        const DateAlreadyExists = await scheduleRepository.findOne({date: date});
        if(DateAlreadyExists) {
            return response.status(400).json({
                error: "Esta data já foi agendada, escolha outra."
            });
        }

        const data = { patient, doctor, date };

        // a função create, cria um objeto do tipo User
        const schedule = scheduleRepository.create(data);

        // salva o objeto no banco de dados
        await scheduleRepository.save(schedule);
        return response.json(schedule);
        }
    }