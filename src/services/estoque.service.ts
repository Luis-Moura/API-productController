import * as HttpHelper from "../utils/HttpHelper";
import { HttpResponse } from "../models/HttpResponse.interface";
import Estoque from "../models/Estoque.model";

export const listAllStock = async (): Promise<HttpResponse> => {
    try {
        const stock = await Estoque.findAll();

        if (stock) {
            return HttpHelper.ok(stock);
        } else {
            return HttpHelper.noContent();
        }
    } catch (error) {
        console.log(error);
        return HttpHelper.internalServerError();
    }
};

export const createProduct = async (
    descricao: String,
): Promise<HttpResponse> => {
    try {
        if (descricao) {
            const product = {
                quantidade: 0,
                descricao,
            };

            await Estoque.create(product);
            return HttpHelper.created();
        } else {
            return HttpHelper.badRequest();
        }
    } catch (error) {
        console.log(error);
        return HttpHelper.internalServerError();
    }
};

export const deleteProductById = async (id: number): Promise<HttpResponse> => {
    try {
        const product = await Estoque.findOne({ where: { id: id } });

        if (product) {
            await Estoque.destroy({ where: { id: id } });
            return HttpHelper.noContent();
        } else {
            return HttpHelper.badRequest();
        }
    } catch (error) {
        console.log(error);
        return HttpHelper.internalServerError();
    }
};

export const updateProductById = async (
    id: number,
    type: string,
): Promise<HttpResponse> => {
    try {
        const product = await Estoque.findOne({ where: { id: id } });

        if (product) {
            let newQuantity = product.dataValues.quantidade;

            if (type === "increment") {
                newQuantity++;
            } else if (type === "decrement" && newQuantity > 0) {
                newQuantity--;
            } else {
                return HttpHelper.badRequest();
            }

            await Estoque.update(
                { quantidade: newQuantity },
                { where: { id: id } },
            );

            return HttpHelper.ok({
                id,
                quantidade: newQuantity,
                descricao: product.getDataValue("descricao"),
            });
        } else {
            return HttpHelper.badRequest();
        }
    } catch (error) {
        console.log(error);
        return HttpHelper.internalServerError();
    }
};
