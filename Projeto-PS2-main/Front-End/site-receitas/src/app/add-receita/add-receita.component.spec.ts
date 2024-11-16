import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';  // Importe o HttpClientModule
import { AddReceitaComponent } from './add-receita.component';
import { ReceitaService } from '../services/receita.service';

describe('AddReceitaComponent', () => {
  let component: AddReceitaComponent;
  let fixture: ComponentFixture<AddReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddReceitaComponent],
      
      })
    .compileComponents();

    fixture = TestBed.createComponent(AddReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
