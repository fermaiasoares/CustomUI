import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('usuarios')
class Usuario {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @CreateDateColumn()
    created_at: string;

    @UpdateDateColumn()
    updated_at: string;

    constructor() {
        if(!this.created_at) {
            this.created_at = `${new Date()}`;
        }

        if(!this.updated_at) {
            this.updated_at = `${new Date()}`;
        }
    }
}

export default Usuario;
