import 'reflect-metadata';
import React, { useCallback, useEffect, useState } from 'react';
import Login from './src/pages/Login';

import { Instancias, Migrations } from './src/database';
import { Connection, createConnection } from 'typeorm';

const App = () => {
    const [defaultConnection, setConnection] = useState<Connection | null>(null)

    useEffect(() => {
        if(!defaultConnection) {
            setupConnection();
        }
    }, [])

    const setupConnection = useCallback(async () => {
        try {
            const connection = await createConnection({
                name: 'default',
                type: 'react-native',
                database: 'versasus_ace.db',
                location: 'default',
                synchronize: false,
                migrationsRun: true,
                entities: Instancias,
                migrations: Migrations
            });

            setConnection(connection);
        } catch (error) {
            console.log(error);
        }
    }, [])

    return <Login />
}

export default App;
