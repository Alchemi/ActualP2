
import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";


import { Data } from "@angular/router";


@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {
    public totalItem : number = 0;
    constructor(private cartService : CartService) { }
    ngOnInit(): void {
      
        }
    
    
    toggleDarkTheme(): void{
        document.body.classList.toggle('dark-theme');
}

dataset = [];

public searchText: Data['items'];

}