import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  BASE_URL = ["http://localhost:8080"];

  register(signupRequest: any): Observable<any>{
    return this.httpClient.post(this.BASE_URL + "/api/auth/signup", signupRequest);
  }

}
