import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggedData } from '../data/logged-data';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private apiUrl  = 'https://qbanksenura.herokuapp.com/api/';
  private loggedUser = LoggedData.getLoggedData();

  constructor(private http : HttpClient) { }
  
  userLogin(data){
     const path = `${this.apiUrl}auth/signin`
     const headers = { headers : this.loggedUser.headers};
     return this.http.post(path, data , headers);
   }
}
