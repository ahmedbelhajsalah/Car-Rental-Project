import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../post-car/post-car.component';
import { Cars } from '../admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrl: './update-car.component.css'
})
export class UpdateCarComponent implements OnInit {


  carId: number = this.activatedRoute.snapshot.params["id"];

  updateCarForm!: FormGroup;
  matcher = new MyErrorStateMatcher();
  carUpdate: any;
  carList: string[] = ['BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Ford', 'Toyota'];
  carTypeList: string[] = ['BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Ford', 'Toyota'];
  transmissionList: string[] = ['BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Ford', 'Toyota'];
  carColorList: string[] = ['BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Ford', 'Toyota'];
  selectedFile!: File ;
  imagePreview!: string | ArrayBuffer | null;

  constructor(private fb: FormBuilder, private adminService: AdminService,
     private activatedRoute: ActivatedRoute, private router: Router){}

     patchFormWithCarData() {
      if (this.carUpdate) {
        this.updateCarForm.patchValue({
          selectBrand: this.carUpdate.selectBrand,
          name: this.carUpdate.name,
          selectType: this.carUpdate.selectType,
          selectTransmission: this.carUpdate.selectTransmission,
          selectColor: this.carUpdate.selectColor,
          year: this.carUpdate.year,
          price: this.carUpdate.price,
          description: this.carUpdate.description,
        });
      }
    }
    


  ngOnInit(): void {
    this.carUpdate = {
      selectBrand: "Audi",
      name: "Audi",
      selectType: "BMW",
      selectTransmission: "Audi",
      selectColor: "Audi",
      year: new FormControl(new Date("07/01/2022")),
      price: 44,
    description: " in a good situation",
    };
    
    this.updateCarForm = this.fb.group({
      selectBrand : [null, [Validators.required]],
      name: [null, [Validators.required]],
      selectType: [null, [Validators.required]],
      selectTransmission: [null, [Validators.required]],
      selectColor: [null, [Validators.required]],
      year: [null,Validators.required],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
    
    this.updateCarForm.patchValue(this.carUpdate); // comment this and this.carUpdate after fixing the access
    //this.getCarById(); uncomment this after fixing the access
  }

  getCarById(){
    this.adminService.getCarById(this.carId).subscribe(data =>{
      console.log(data);
      this.carUpdate = data;
      this.updateCarForm.patchValue(this.carUpdate);
    });
  }

  updateCar(){
    const formData: FormData = new FormData();
    if(this.selectedFile){
      formData.append('image', this.selectedFile);
    }
    formData.append('brand', this.updateCarForm.get('brand')?.value);
    formData.append('name', this.updateCarForm.get('name')?.value);
    formData.append('selectType', this.updateCarForm.get('selectType')?.value);
    formData.append('selectTransmission', this.updateCarForm.get('selectTransmission')?.value);
    formData.append('selectColor', this.updateCarForm.get('selectColor')?.value);
    formData.append('year', this.updateCarForm.get('year')?.value);
    formData.append('price', this.updateCarForm.get('price')?.value);
    formData.append('description', this.updateCarForm.get('description')?.value);
    this.adminService.updateCar(this.carId,formData).subscribe(data =>{
      alert("Car updated successfully");
      this.router.navigateByUrl("/admin/dashboard");
    },error => {
      alert("Something went wrong");
    })
  }

  onFileSelected($event: any) {
    this.selectedFile = $event.target.files[0];
    this.previewImage();
    }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);  }


}
