import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private _httpClient: HttpClient ,private _router:Router) {
    if (localStorage.getItem('userToken')) {
      this.getUserData();
    }
  }
  register(data: any): Observable<any> {
    return this._httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      data
    );
  }
  login(data: any): Observable<any> {
    return this._httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      data
    );
  }
  getUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let encoded = jwtDecode(encodedToken);
    this.userData.next(encoded);
  }
  logout(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate(['/login'])

  }
}
