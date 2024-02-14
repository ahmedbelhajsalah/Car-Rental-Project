import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { Cars } from '../components/admin-dashboard/admin-dashboard.component';

const BASE_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  postCar(carDto: any): Observable<Cars> {
    return this.http.post<Cars>(BASE_URL + "/api/admin/car", carDto, { headers: this.createAuthorizationHeader() });
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

  getAllCars(): Observable<Cars[]> {
    return this.http.get<Cars[]>(BASE_URL + "/api/admin/cars", { headers: this.createAuthorizationHeader() });
  }
  deleteCar(id: number): Observable<any>{
    return this.http.delete(BASE_URL + "/api/admin/car" + id,  { headers: this.createAuthorizationHeader() });
  }

}
