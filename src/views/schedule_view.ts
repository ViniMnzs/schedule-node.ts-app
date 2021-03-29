import { Schedule } from '../models/Schedule';

export default{
    render(schedule:Schedule){
        return {
            id: schedule.id,
            patient: schedule.patient,
            doctor: schedule.doctor,
            date: schedule.date,
        }
    },
    renderMany(schedule:Schedule[]){
        return schedule.map(schedule=>this.render(schedule))
;    }
};
