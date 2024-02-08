import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  constructor( private fb: FormBuilder, private authService: AuthService, private router: Router){}

  signupForm!: FormGroup;


  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email]],
      password: [null, [Validators.required, Validators.minLength(7)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(7), this.passwordMatchValidator]],
    });
  }

  passwordMatchValidator = (control: FormControl): { [key: string]: boolean } | null => {
    const password = this.signupForm?.controls['password'].value;
    const confirmPassword = control.value;
    if(password && confirmPassword && password !== confirmPassword){
      return { 'passwordMismatch': true };
    }
  
    
    return null;
  }
  


onSubmit() {
  return this.authService.register(this.signupForm.value).subscribe(res =>{
    if(res.id){
      alert("Signed up succesfully");
      this.router.navigateByUrl("/login");
    } else{
      alert('Something went wrong');
    }
  })
}

}
