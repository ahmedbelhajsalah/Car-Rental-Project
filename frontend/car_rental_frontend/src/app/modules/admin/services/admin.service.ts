import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';


const BASE_URL = ["http://localhost:8080"];
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  postCar(carDto: any): Observable<any>{
    return this.http.post(BASE_URL+"/api/admin/car", carDto, { headers: this.createAuthorizationHeader() })
  }

  createAuthorizationHeader(): HttpHeaders{
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer KyKTG4pJL1eMG9rlfVz6oC68rABycKUKscKIIiiDm1TiBexQBzvBdiwJoBKPi0vL' 
    )
  }

}
