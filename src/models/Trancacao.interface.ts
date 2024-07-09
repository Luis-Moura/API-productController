export interface TrancacaoInterface {
    id?: number;
    tipo: "entrada" | "saida";
    descricao: string;
    valor: number;
}
