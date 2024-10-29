import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CriarUserComponent } from './criar-user/criar-user.component';
import { AddReceitaComponent } from './add-receita/add-receita.component';

export const routes: Routes = [
    { path: '', component: LoginComponent }, 
    { path: 'home', component: HomeComponent }, 
    { path: 'addReceita', component: AddReceitaComponent }, 

  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }