import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { VerReceitaModule } from './ver-receita/ver-receita.module';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ReceitaService } from './services/receita.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    LoginModule,
    VerReceitaModule
  ],
  providers: [    
    provideHttpClient()
    , ReceitaService 
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
