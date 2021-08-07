import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegistroComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
