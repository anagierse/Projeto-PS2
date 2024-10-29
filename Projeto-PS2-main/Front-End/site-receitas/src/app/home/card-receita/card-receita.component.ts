import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-receita',
  standalone: true,
  imports: [],
  templateUrl: './card-receita.component.html',
  styleUrl: './card-receita.component.css'
})
export class CardReceitaComponent {
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() imagemUrl: string = ''; 
}
