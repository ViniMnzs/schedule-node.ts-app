import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class schedule1616875579308 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'schedule',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'patient',
                        type: 'varchar',
                    },
                    {
                        name: 'doctor',
                        type: 'varchar',
                    },
                    {
                        name: 'date',
                        type: 'varchar'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('schedule');
    }

}
