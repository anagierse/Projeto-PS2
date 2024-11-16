export interface Receita {
    id: string;
    nome: string;
    descricao: string;
    urlImagem: string;
    ingredientes: string[] | string;
    modoPreparo: string;
  }
  