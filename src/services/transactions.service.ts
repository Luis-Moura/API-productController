import * as HttpHelper from "../utils/HttpHelper";
import { Transacoes } from "../models/Transacoes.model";
import { HttpResponse } from "../models/HttpResponse.interface";

export const listAllTransactions = async (): Promise<HttpResponse> => {
    try {
        const transactions = await Transacoes.findAll();

        if (transactions) {
            return HttpHelper.ok(transactions);
        } else {
            return HttpHelper.noContent();
        }
    } catch (error) {
        console.log(error);
        return HttpHelper.internalServerError();
    }
};

export const createNewTransaction = async (
    tipo: string,
    descricao: string,
    valor: number,
): Promise<HttpResponse> => {
    try {
        if (tipo && descricao && valor) {
            
            const transaction = {
                tipo,
                descricao,
                valor,
            };

            await Transacoes.create(transaction);

            return HttpHelper.created();
        } else {
            return HttpHelper.badRequest();
        }
    } catch (error) {
        console.log(error);

        return HttpHelper.internalServerError();
    }
};

export const deleteTransactionById = async (
    id: number,
): Promise<HttpResponse> => {
    try {
        const transaction = await Transacoes.findOne({ where: { id: id } });

        if (!transaction) {
            return HttpHelper.badRequest();
        } else {
            await Transacoes.destroy({ where: { id: id } });

            return HttpHelper.noContent();
        }
    } catch (error) {
        console.log(error);
        return HttpHelper.internalServerError();
    }
};
