import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { CriarUserModule } from './criar-user/criar-user.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LoginModule,
    CriarUserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
