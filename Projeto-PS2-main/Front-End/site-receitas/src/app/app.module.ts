import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { CriarUserModule } from './criar-user/criar-user.module';
import { RouterModule } from '@angular/router';
import { VerReceitaModule } from './ver-receita/ver-receita.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    LoginModule,
    CriarUserModule,
    VerReceitaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
