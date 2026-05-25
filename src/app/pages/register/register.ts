import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router){
    this.registerForm = this.fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.minLength(6)]]
    })
  }

  onSubmit():void{
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value);
      alert('Registration successful! Please login to continue.');
      this.route.navigate(['/login']);
    
    }
  }

}