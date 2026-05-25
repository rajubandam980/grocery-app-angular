import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm!: FormGroup;

  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    });
  }
  onSubmit():void{
    const { email, password } = this.loginForm.value;
    const success = this.authService.login(email, password);

    if(success){
      this.authService.setLoggedIn();
      this.router.navigate(['/']);
    }
    else{
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
  }
  

}
