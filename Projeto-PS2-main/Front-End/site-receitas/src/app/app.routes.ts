import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddReceitaComponent } from './add-receita/add-receita.component';
import { VerReceitaComponent } from './ver-receita/ver-receita.component';

export const routes: Routes = [
    { path: '', component: LoginComponent }, 
    { path: 'home', component: HomeComponent }, 
    { path: 'addReceita', component: AddReceitaComponent }, 
    { path: 'verReceita/:id', component: VerReceitaComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }