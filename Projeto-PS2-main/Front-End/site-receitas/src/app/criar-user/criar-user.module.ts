import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CriarUserComponent } from './criar-user.component';

@NgModule({
  declarations: [CriarUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule  
  ],
  exports: [CriarUserComponent]
})
export class CriarUserModule { }