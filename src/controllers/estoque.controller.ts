import { Request, Response } from "express";
import * as service from "../services/estoque.service";

export const listAllStock = async (req: Request, res: Response) => {
    const httpResponse = await service.listAllStock();

    if (httpResponse) {
        res.status(httpResponse.status).json(httpResponse.body);
    }
};

export const createProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const httpResponse = await service.createProduct(product.descricao);

    if (httpResponse) {
        res.status(httpResponse.status).json(httpResponse.body);
    }
};

export const deleteProductById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const httpResponse = await service.deleteProductById(id);

    if (httpResponse) {
        res.status(httpResponse.status).json(httpResponse.body);
    }
};

export const updateProductById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const type = req.params.tipo;

    const httpResponse = await service.updateProductById(id, type);

    if (httpResponse) {
        res.status(httpResponse.status).json(httpResponse.body);
    }
};
