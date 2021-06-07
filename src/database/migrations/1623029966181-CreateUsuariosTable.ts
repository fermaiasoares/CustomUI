import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUsuariosTable1623029966181 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'usuarios',
            columns: [
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    type: 'integer',
                    generationStrategy: 'increment'
                },
                {
                    name: 'nome',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'senha',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'varchar',
                },
                {
                    name: 'updated_at',
                    type: 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios');
    }

}
