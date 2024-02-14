import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

export interface Cars{
  id: number,
  name: string,
  brand: string,
  color: string,
  type: string,
  transmission: string,
  description: string,
  price: number,
  date: Date,
  image: string
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {


  cars: Cars[] = [{
    id: 1,
    name: "BMW",
  brand: "BMW",
  color: "Black",
  type: "X7",
  transmission: "test",
  description: " in a good situation",
  price: 33,
  date: new Date("07/01/2022"),
  image: "https://material.angular.io/assets/img/examples/shiba2.jpg"
  },
  {
    id: 1,
    name: "Audi",
  brand: "Audi",
  color: "Black",
  type: "S3",
  transmission: "test",
  description: " in a good situation",
  price: 33,
  date: new Date("07/01/2022"),
  image: "https://material.angular.io/assets/img/examples/shiba2.jpg"
  },
  {
    id: 1,
    name: "Mercedes",
  brand: "Mercedes",
  color: "Black",
  type: "M4",
  transmission: "test",
  description: " in a good situation",
  price: 33,
  date: new Date("07/01/2022"),
  image: "https://material.angular.io/assets/img/examples/shiba2.jpg"
  },
  {
    id: 1,
    name: "Volkswagen",
  brand: "Volkswagen",
  color: "Black",
  type: "V6",
  transmission: "test",
  description: " in a good situation",
  price: 33,
  date: new Date("07/01/2022"),
  image: "https://material.angular.io/assets/img/examples/shiba2.jpg"
  },
  
];

  constructor(private adminService :AdminService){}
  

  ngOnInit(): void {
    //this.getAllCars(); //to uncomment it once we don't have forbidden access
  }

  getAllCars(){
    this.adminService.getAllCars().subscribe(data => {
      data.forEach((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.cars.push(element);
      });
    })
  }

  deleteCar(id: number){
    this.adminService.deleteCar(id).subscribe(data => {
      this.getAllCars();
      alert("Car deleted successfully");
    })
  }

}
