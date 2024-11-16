import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { Receita } from '../models/receita-model';
import { ReceitaService } from '../services/receita.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-receita',
  standalone: true,
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
  ],
  templateUrl: './add-receita.component.html',
  styleUrl: './add-receita.component.css',
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
    if (Array.isArray(this.recipe.ingredientes)) {
      this.recipe.ingredientes.push('');
    }
  }

  removeIngredient(index: number) {
    if (Array.isArray(this.recipe.ingredientes) && this.recipe.ingredientes.length > 1) {
      this.recipe.ingredientes.splice(index, 1);
    }
  }

  submitRecipe() {

    this.receitaService.saveReceita(this.recipe).subscribe({
      next: (response: any) => {
        console.log('Receita criada com sucesso!', response);
        this.router.navigate(['/home']);
      },
      error: (err: any) => {
        console.error('Erro ao criar receita:', err);
        alert('Erro ao salvar a receita. Tente novamente mais tarde.');
      }
    });
  }

  trackByIndex(index: number): number {
    return index;
  }

  login() {
    this.router.navigate(['/login']);
  }
}
