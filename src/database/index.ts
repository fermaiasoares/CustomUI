// Entidades
import Usuario from './entities/Usuario';
import Instancia from './entities/Instancia';

// Migrations
import CreateUsuariosTable1623029966181 from './migrations/1623029966181-CreateUsuariosTable';

export const Instancias = [
    Usuario,
    Instancia
]

export const Migrations = [
    CreateUsuariosTable1623029966181
]
