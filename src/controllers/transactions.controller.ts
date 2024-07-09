import { Request, Response } from "express";
import * as service from "../services/transactions.service";
import { TrancacaoInterface } from "../models/Trancacao.interface";

export const listAllTransactions = async (req: Request, res: Response) => {
    const httpResponse = await service.listAllTransactions();

    if (httpResponse) {
        res.status(httpResponse.status).json(httpResponse.body);
    }
};

export const createNewTransaction = async (req: Request, res: Response) => {
    const transation: TrancacaoInterface = req.body;

    const httpResponse = await service.createNewTransaction(
        transation.tipo,
        transation.descricao,
        transation.valor,
    );

    if (httpResponse) {
        res.status(httpResponse.status).json(httpResponse.body);
    }
};

export const deleteTransactionById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const httpResponse = await service.deleteTransactionById(id);

    if (httpResponse) {
        res.status(httpResponse.status).json(httpResponse.body);
    }
};
