import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor ingresa tu nombre, un nombre de usuario y contraseña';
      return;
    }

    const existingUser = this.userService.getUser(this.username);
    if (existingUser) {
      this.errorMessage = 'El nombre de usuario ya está en uso';
      return;
    }

    const newUser = {
      username: this.username,
      password: this.password
    };

    this.userService.register(newUser)
      .subscribe(() => {
        this.router.navigate(['/login']);
      }, error => {
        this.errorMessage = 'Error al registrar el usuario';
      });
  }

  onBlur() {
    console.log('Input field blurred');
  }

  onClick() {
    console.log('Button clicked');
  }
}