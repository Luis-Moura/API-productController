import { app } from "./app";
import { connection } from "./database";

import * as dotenv from 'dotenv';
dotenv.config()

if (connection) {
    connection
        .authenticate()
        .then(() => {
            console.log("🌐 Conexão bem sucedida");
        })
        .catch((error) => {
            console.log(error);
        });
}

const PORT = process.env.PORT;

export const server = app.listen(PORT, () => {
    console.log(`💻 Server running`);
});
