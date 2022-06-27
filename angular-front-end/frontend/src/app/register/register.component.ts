import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { of } from 'rxjs';


const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Headers': 'Content-type',
    'Access-Control-Allow-Methods': 'Get',
    'Access-Control-Allow-Origin' : '*'
  })
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username!:String;
  password!:String;
  Password!:String;
  user={
    username:String,
    password:String
  };
  response:any;
  msgError="";
  Credentials ={withCredentials:true};

  constructor(private _http : HttpClient, private router : Router) { }

  ngOnInit(): void{
  }

  onSubmit() { 
    if(this.password == this.Password){
      let user = {
        username: this.username,
        password: this.password
      };
      console.log(this.username);
      console.log(this.password);
      console.log(user);
      let Credentials ={withCredentials:true};
      let response =this._http.post<any>("http://localhost:3000/animeSQL/authcontroller", user, httpOptions).subscribe(
        {
          next:(_v:1)=>this.router.navigate(["/"]),
          error:(_e:0)=>console.error(this.msgError="Something went wrong creating account"),
          complete:()=> console.info('User successfully created')
        }
      );
      console.log(response);
    } else{
      this.msgError="Passwords do not match, try again"
    }
    
    }
    

}