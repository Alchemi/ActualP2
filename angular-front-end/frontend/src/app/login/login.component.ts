import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {of} from 'rxjs';

import { Router } from '@angular/router';
import { User } from '../models/user';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Headers': 'Content-type',
    'Access-Control-Allow-Methods': 'Get',
    'Access-Control-Allow-Origin' : '*'
  })
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!:string;
  password!:String;
  result!:boolean;
  User ={username:String, password:String};
  Credentials ={withCredentials: true};
  response:any;
  msgError="";
  constructor(private _http : HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let User ={username: this.username,
               password: this.password};
    let Credentials ={withCredentials:true};
    console.log(this.username);
    console.log(this.password);
    console.log(User);
    console.log(Credentials);

    let response = this._http.post<any>("http://localhost:3000/animeSQL/authcontroller/login", 
    User, httpOptions).subscribe({
      next:(_v:1) => this.router.navigate(['/products']),
      error: (_e:0)=> console.error(this.msgError="Invalid Credentials, Please Enter a Valid User Name and/or Password"),
      complete: () => window.localStorage.setItem("username",this.username)

    });
      }
    };
    