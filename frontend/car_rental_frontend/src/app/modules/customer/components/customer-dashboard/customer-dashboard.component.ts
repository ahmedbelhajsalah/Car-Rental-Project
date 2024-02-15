import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Cars } from '../../../admin/components/admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent implements OnInit {

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
    id: 2,
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
    id: 3,
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
    id: 4,
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


  constructor(private customerService: CustomerService){}


  ngOnInit(): void {
    //this.getAllCars(); //to uncomment it once we don't have forbidden access
  }

  getAllCars(){
    this.customerService.getAllCars().subscribe(data => {
      data.forEach((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.cars.push(element);
      });
    })
  }


}
