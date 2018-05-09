import { AuthenticationRoutingModule } from './authentication-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [CommonModule, AuthenticationRoutingModule],
  declarations: [LoginComponent, SignUpComponent, UserComponent],
})
export class AuthenticationModule {}
