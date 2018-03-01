import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApiService } from './service/api.service';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './service/auth.service';
import { MaterialModule } from './material.module';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
  ],
  providers: [ApiService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
