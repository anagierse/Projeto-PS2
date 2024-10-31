import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid'; 
import { Receita } from '../models/receita-model';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  receitas = [
    {
      id: uuidv4(),
      titulo: 'Receita 1',
      modoPreparo: 'Passo 1: Prepare os ingredientes. Passo 2: Misture',
      descricao: 'Descrição da Receita 1.',
      imagemUrl: 'https://example.com/imagem1.jpg'
    },
    {
      id: uuidv4(),
      titulo: 'Receita 2',
      modoPreparo: 'Passo 1: Prepare os ingredientes. Passo 2: Misture',
      descricao: 'Descrição da Receita 2.',
      imagemUrl: 'https://example.com/imagem2.jpg'
    },
    {
      id: uuidv4(),
      titulo: 'Receita 3',
      modoPreparo: 'Passo 1: Prepare os ingredientes. Passo 2: Misture',
      descricao: 'Descrição da Receita 3.',
      imagemUrl: 'https://example.com/imagem3.jpg'
    },
    {
      id: uuidv4(),
      titulo: 'Receita 4',
      modoPreparo: 'Passo 1: Prepare os ingredientes. Passo 2: Misture',
      descricao: 'Descrição da Receita 4.',
      imagemUrl: 'https://example.com/imagem4.jpg'
    },
    {
      id: uuidv4(),
      titulo: 'Receita 5',
      modoPreparo: 'Passo 1: Prepare os ingredientes. Passo 2: Misture',
      descricao: 'Descrição da Receita 5.',
      imagemUrl: 'https://example.com/imagem5.jpg'
    },
    {
      id: uuidv4(),
      titulo: 'Receita 6',
      modoPreparo: 'Passo 1: Prepare os ingredientes. Passo 2: Misture',
      descricao: 'Descrição da Receita 6.',
      imagemUrl: 'https://example.com/imagem6.jpg'
    },
    {
      id: uuidv4(),
      titulo: 'Receita 7',
      modoPreparo: 'Passo 1: Prepare os ingredientes. Passo 2: Misture',
      descricao: 'Descrição da Receita 7.',
      imagemUrl: 'https://example.com/imagem7.jpg'
    },
    {
      id: uuidv4(),
      titulo: 'Receita 8',
      modoPreparo: 'Passo 1: Prepare os ingredientes. Passo 2: Misture',
      descricao: 'Descrição da Receita 8.',
      imagemUrl: 'https://example.com/imagem8.jpg'
    },
    {
      id: uuidv4(),
      titulo: 'Receita 9',
      modoPreparo: 'Passo 1: Prepare os ingredientes. Passo 2: Misture',
      descricao: 'Descrição da Receita 9',
      imagemUrl: 'https://example.com/imagem9.jpg'
    }
  ];

  getReceitaById(id: string): Receita | null {
    const receita = this.receitas.find(receita => receita.id === id);
    return receita ? receita : null; // Retorna null se não encontrar a receita
  }
}




