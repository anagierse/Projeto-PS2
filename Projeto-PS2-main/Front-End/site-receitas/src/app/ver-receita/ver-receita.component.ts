import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receita } from '../models/receita-model';
import { ReceitaService } from '../services/receita.service';

@Component({
  selector: 'app-ver-receita',
  templateUrl: './ver-receita.component.html',
  styleUrls: ['./ver-receita.component.css']
})
export class VerReceitaComponent implements OnInit {
  receita: Receita | null = null; 
  constructor(
    private route: ActivatedRoute,
    private receitaService: ReceitaService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.receitaService.getReceitaById(Number(id)).subscribe((receita) => {
        this.receita = receita;
      });
        } else {
      console.error('ID da receita não encontrado.');
      this.router.navigate(['/home']);
    }
  }

  voltar() {
    this.router.navigate(['/home']);
  }
}
