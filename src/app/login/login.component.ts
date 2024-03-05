import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService) {}

  onBlur() {
    console.log('Input blurred');
  }

  onClick() {
    console.log('Button clicked');
    // You can perform additional actions here
  }

  onSubmit() {
    this.userService.login(this.username, this.password)
      .subscribe(success => {
        if (success) {
          console.log('Bien');
        } else {
          this.errorMessage = 'Credenciales incorrectas';
        }
      });
  }
}