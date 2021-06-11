import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsuredClass } from '../Class/insured-class';

@Injectable({
  providedIn: 'root'
})
export class RestApiOperationsService {
  apiUrl: String = "http://localhost:3000";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  getAllUserRoles() {
    return this.http.get(this.apiUrl + '/UserRole');
  }

  getAllInsured() {
    return this.http.get(this.apiUrl + '/Insured');
  }
  getInsured(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/Insured/${username}`)
  }
  addClaim(username: String, Insured: any) {
    console.log("object inside addClaim", Insured)
    console.log("username inside addclaim ", username)
    const httpOPtions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(`${this.apiUrl}/Insured/${username}`, Insured, httpOPtions);
  }
  addUserRole(userroleobj: any): Observable<any> {
    return this.http.post(this.apiUrl + '/userrole', userroleobj)
  }
}
