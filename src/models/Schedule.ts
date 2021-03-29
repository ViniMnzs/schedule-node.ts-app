import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("schedule")
class Schedule {
    @PrimaryColumn() 
    readonly id: string;
    @Column()
    patient: string;
    @Column()
    doctor: string;
    @Column()
    date: string;

    constructor() {
        if(!this.id) { // caso esteja criando um usuário
            this.id = uuid(); // gera um uuid
        }
    }
}
export { Schedule };