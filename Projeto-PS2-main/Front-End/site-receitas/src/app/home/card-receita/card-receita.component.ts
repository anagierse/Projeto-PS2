import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Input() id!: string;
  @Output() receitaSelecionada = new EventEmitter<string>();

  verReceita() {
    this.receitaSelecionada.emit(this.id);
  }
}
