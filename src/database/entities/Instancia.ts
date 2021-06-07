import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('instancias')
class Instancia {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    instancia: string;

    @Column()
    url: string;

    @Column()
    cidade: string;

    @Column()
    ativo: boolean;

    @CreateDateColumn()
    created_at: string;

    @UpdateDateColumn()
    updated_at: string;

    constructor() {
        if(!this.created_at) {
            this.created_at = `${new Date()}`
        }

        if(!this.updated_at) {
            this.updated_at = `${new Date()}`
        }
    }
}

export default Instancia;
