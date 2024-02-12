import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  constructor( private fb: FormBuilder, private authService: AuthService, private router: Router){}


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.email]],
      password: [null, [Validators.required, Validators.minLength(7)]],
    });
  }

  loginForm!: FormGroup;

  onLoginSubmit() {
    throw new Error('Method not implemented.');
    }

}
