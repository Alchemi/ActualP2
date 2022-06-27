import { Component } from '@angular/core';
import { Data } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  toggleDarkTheme(): void{
    document.body.classList.toggle('dark-theme');
  }

}