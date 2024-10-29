import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CardReceitaComponent } from './card-receita/card-receita.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardReceitaComponent], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  receitas = [
    {
      titulo: 'Receita 1',
      descricao: 'Descrição da Receita 1.',
      imagemUrl: 'https://example.com/imagem1.jpg'
    },
    {
      titulo: 'Receita 2',
      descricao: 'Descrição da Receita 2.',
      imagemUrl: 'https://example.com/imagem2.jpg'
    },
    {
      titulo: 'Receita 3',
      descricao: 'Descrição da Receita 3.',
      imagemUrl: 'https://example.com/imagem3.jpg'
    },
    {
      titulo: 'Receita 4',
      descricao: 'Descrição da Receita 4.',
      imagemUrl: 'https://example.com/imagem4.jpg'
    },
    {
      titulo: 'Receita 5',
      descricao: 'Descrição da Receita 5.',
      imagemUrl: 'https://example.com/imagem5.jpg'
    },
    {
      titulo: 'Receita 6',
      descricao: 'Descrição da Receita 6.',
      imagemUrl: 'https://example.com/imagem6.jpg'
    },
    {
      titulo: 'Receita 7',
      descricao: 'Descrição da Receita 7.',
      imagemUrl: 'https://example.com/imagem7.jpg'
    },
    {
      titulo: 'Receita 8',
      descricao: 'Descrição da Receita 8.',
      imagemUrl: 'https://example.com/imagem8.jpg'
    },
    {
      titulo: 'Receita 9',
      descricao: 'Descrição da Receita 9',
      imagemUrl: 'https://example.com/imagem9.jpg'
    }
  ];

  
}
