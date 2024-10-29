import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './criar-user.component.html',
  styleUrl: './criar-user.component.css'
})
export class CriarUserComponent {
  frm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.frm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  criarConta(): void {
    if (this.frm.valid) {
      const { username, email, password } = this.frm.value;
      console.log('Conta criada com sucesso!', { username, email, password });
      this.router.navigate(['/home']);
    } else {
      this.frm.markAllAsTouched(); 
    }
  }

  voltar(): void {
    this.router.navigate(['/login']); 
  }
}
