import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  constructor( private fb: FormBuilder, private authService: AuthService, private router: Router ){}


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.email]],
      password: [null, [Validators.required, Validators.minLength(7)]],
    });
  }

  loginForm!: FormGroup;

  onLoginSubmit() {
    this.authService.login(this.loginForm.value).subscribe(data =>{
      if(data.userId != null){
        const user = {
          id: data.userId,
          role: data.userRole
        }
        StorageService.saveUser(user);
        StorageService.saveToken(data.jwt);
        if(StorageService.isAdminLoggedIn()){
          this.router.navigateByUrl("/admin/dashboard");
        }else if(StorageService.isCustomerLoggedIn()){
          this.router.navigateByUrl("/customer/dashboard");
        } else{
          alert("Bad Credentials");
        }
      }
    })
    }

}
