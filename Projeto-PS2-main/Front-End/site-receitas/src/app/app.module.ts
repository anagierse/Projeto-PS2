import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { VerReceitaModule } from './ver-receita/ver-receita.module';
import { HttpClientModule } from '@angular/common/http';

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
    VerReceitaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
