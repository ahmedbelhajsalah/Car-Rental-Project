import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { read } from 'fs';
import { prependListener } from 'process';
import { reduce } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrl: './post-car.component.css'
})
export class PostCarComponent {

  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router){}


  carForm!: FormGroup;
  matcher = new MyErrorStateMatcher();
  selectedFile!: File ;
  imagePreview!: string | ArrayBuffer | null;

  carList: string[] = ['BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Ford', 'Toyota'];
  carTypeList: string[] = ['BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Ford', 'Toyota'];
  transmissionList: string[] = ['BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Ford', 'Toyota'];
  carColorList: string[] = ['BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Ford', 'Toyota'];


  ngOnInit(): void {
    this.carForm = this.fb.group({
      selectBrand : ['valid', [Validators.required, Validators.pattern('valid')]],
      name: [null, [Validators.required]],
      selectType: ['valid', [Validators.required, Validators.pattern('valid')]],
      selectTransmission: ['valid', [Validators.required, Validators.pattern('valid')]],
      selectColor: ['valid', [Validators.required, Validators.pattern('valid')]],
      year: [Validators.required],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage(){
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  onPostCar() {
    const formData: FormData = new FormData();
    formData.append('img', this.selectedFile);
    formData.append('brand', this.carForm.get('brand')?.value);
    formData.append('name', this.carForm.get('name')?.value);
    formData.append('selectType', this.carForm.get('selectType')?.value);
    formData.append('selectTransmission', this.carForm.get('selectTransmission')?.value);
    formData.append('selectColor', this.carForm.get('selectColor')?.value);
    formData.append('year', this.carForm.get('year')?.value);
    formData.append('price', this.carForm.get('price')?.value);
    formData.append('description', this.carForm.get('description')?.value);
    this.adminService.postCar(formData).subscribe(data =>{
      alert("Car posted successfully");
    },error => {
      alert("Something went wrong");
    })
  }
  
}
