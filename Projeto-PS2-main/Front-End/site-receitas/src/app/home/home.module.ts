import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardReceitaComponent } from './card-receita/card-receita.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardReceitaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
