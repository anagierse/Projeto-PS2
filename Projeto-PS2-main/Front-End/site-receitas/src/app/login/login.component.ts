import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {
  frm: FormGroup;
  userNotFound: boolean = false;   
  firstLogin: boolean = false;
  contValidaUser = 0;

  constructor(private fb: FormBuilder, private router: Router) {
    this.frm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  login(): void {
    if (this.frm.valid) {
      sessionStorage.setItem('logado', '1');
      console.log('loginSuccess foi salvo no sessionStorage');
      this.router.navigate(['/home']);
    } else {
      this.frm.markAllAsTouched();
    }
  }

  voltar(): void {
    this.userNotFound = false;
    this.contValidaUser = 0;
    this.frm.reset();
  }

  home(): void{
    this.router.navigate(['/home']);
    }

  criarUser(): void{
    this.router.navigate(['/criarUser']);
    }
}
