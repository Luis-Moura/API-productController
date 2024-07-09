import { DataTypes } from "sequelize";
import { connection } from "../database";

export const Estoque = connection.define(
    "estoque",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        timestamps: false, // Desativa a adição automática de createdAt e updatedAt
    },
);

Estoque.sync({ force: false }).then(() => { });

export default Estoque;
