import { Component, OnInit } from '@angular/core';
import { StorageService } from './auth/services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'car_rental_frontend';

  isCustomerLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = true;

  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

  logout(){
    StorageService.logout();
    this.router.navigateByUrl("/login");
  }

}
