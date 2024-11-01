import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-add-receita',
  standalone: true,
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent 
  ],
  templateUrl: './add-receita.component.html',
  styleUrl: './add-receita.component.css'
})
export class AddReceitaComponent  implements OnInit {
  logado: boolean | undefined;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.logado = sessionStorage.getItem('logado') === '1';  
  }
  
    recipe = {
    id: uuidv4(),
    name: '',
    description: '',
    imageUrl: '',
    ingredients: [''] 
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

  trackByIndex(index: number, item: any): any {
    return index;
  }

  login() {
    this.router.navigate(['/login']);
  }
}
