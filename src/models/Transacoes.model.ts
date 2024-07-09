import { DataTypes } from "sequelize";
import { connection } from "../database";

export const Transacoes = connection.define(
    "transacoes",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        tipo: {
            type: DataTypes.ENUM("entrada", "saida"),
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        valor: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        timestamps: false, // Desativa a adição automática de createdAt e updatedAt
    },
);

Transacoes.sync({ force: false }).then(() => {});

export default Transacoes;
