import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Cars } from '../../admin/components/admin-dashboard/admin-dashboard.component';
import { isPlatformBrowser } from '@angular/common';
import { StorageService } from '../../../auth/services/storage/storage.service';


const BASE_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  getAllCars(): Observable<Cars[]> {
    return this.http.get<Cars[]>(BASE_URL + "/api/admin/cars", { headers: this.createAuthorizationHeader() });
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    if (isPlatformBrowser(this.platformId)) {
      const token = StorageService.getToken();
      if (token) {
        return authHeaders.set('Authorization', 'Bearer ' + token);
      }
    }
    return authHeaders;
  }
}
