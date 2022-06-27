import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/userprofile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user : any;
  constructor(private profile:ProfileService) { }

  ngOnInit(): void {
    this.profile.getUserProfile()
    .subscribe(res=>{
        this.user = res;

        this.user.forEach((a:any) => {
            Object.assign(a,{address:"somewhere"});
            
        });
    }) 
  }

}




