import * as controllerStock from "../controllers/estoque.controller";
import * as controllerTransactions from "../controllers/transactions.controller";
import { Router } from "express";
export const router = Router();

router.get("/api/estoque", controllerStock.listAllStock);
router.post("/api/estoque", controllerStock.createProduct);
router.delete("/api/estoque/:id", controllerStock.deleteProductById);
router.patch("/api/estoque/:id/:tipo", controllerStock.updateProductById);

router.get("/api/transacoes", controllerTransactions.listAllTransactions);
router.post("/api/transacoes", controllerTransactions.createNewTransaction);
router.delete(
    "/api/transacoes/:id",
    controllerTransactions.deleteTransactionById,
);
