import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-receita',
  standalone: true,
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-receita.component.html',
  styleUrl: './add-receita.component.css'
})
export class AddReceitaComponent {
  recipe = {
    id: uuidv4(), // Gera um UUID único ao inicializar o objeto
    name: '',
    description: '',
    imageUrl: '',
    ingredients: [''] // Começa com um ingrediente vazio
  };

  addIngredient() {
    this.recipe.ingredients.push('');
  }

  removeIngredient(index: number) {
    if (this.recipe.ingredients.length > 1) {
      this.recipe.ingredients.splice(index, 1);
    }
  }

  submitRecipe() {
    console.log(this.recipe);
  }

  // Função para rastrear elementos pelo índice no *ngFor
  trackByIndex(index: number, item: any): any {
    return index;
  }
}
