import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { NavbarComponent } from '../navbar/navbar.component';
import { ReceitaService } from '../services/receita.service';
import { Receita } from '../models/receita-model';

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
export class AddReceitaComponent implements OnInit {
  logado: boolean | undefined;

  recipe: Receita = {
    id: uuidv4(),
    nome: '',
    descricao: '',
    urlImagem: '',
    ingredientes: [''],
    modoPreparo: ''
  };

  constructor(private router: Router, private receitaService: ReceitaService) {}

  ngOnInit(): void {
    this.logado = sessionStorage.getItem('logado') === '1';
  }

  addIngredient() {
    if (typeof this.recipe.ingredientes === 'string') {
      this.recipe.ingredientes = [this.recipe.ingredientes];
    }
    this.recipe.ingredientes.push('');
  }

  removeIngredient(index: number) {
    if (typeof this.recipe.ingredientes === 'string') {
      this.recipe.ingredientes = [this.recipe.ingredientes];
    }
    if (this.recipe.ingredientes.length > 1) {
      this.recipe.ingredientes.splice(index, 1);
    }
  }

  submitRecipe() {
    if (this.recipe.nome && this.recipe.descricao && Array.isArray(this.recipe.ingredientes) && this.recipe.ingredientes.length > 0) {
      this.recipe.ingredientes = this.recipe.ingredientes.join(', ');
  
      this.receitaService.saveReceita(this.recipe).subscribe({
        next: (response) => {
          console.log('Receita criada com sucesso!', response);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Erro ao criar receita:', err);
          alert('Erro ao salvar a receita. Tente novamente mais tarde.');
        }
      });
    }
  }
  
  trackByIndex(index: number, item: any): any {
    return index;
  }

  login() {
    this.router.navigate(['/login']);
  }
}