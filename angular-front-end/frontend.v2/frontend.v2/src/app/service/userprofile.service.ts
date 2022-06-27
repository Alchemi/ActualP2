import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }

  getUserProfile() {
    return this.http.get<any>("http://localhost:3000/animeSQL/authcontroller/user")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}