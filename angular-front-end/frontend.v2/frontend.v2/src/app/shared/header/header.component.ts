import { Component, OnInit } from '@angular/core';
import { Product, products } from '../../product';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';
import { Router } from '@angular/router';


//SPARKEY YOU IMPORT LOGINCOMPONENT, regiscomponent & router IF STUPID, DELETE.
//sparkey you added private router : Router, delete if necessarry
//you ALSO added this.router.navigate... 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { 
 
  }

  ngOnInit(): void {
  }
  toggleDarkTheme(): void{
    document.body.classList.toggle('dark-theme');
}

dataset = [products];


}

