import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/userprofile.service';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user : any;

  aboutMe = this.formBuilder.group({
    favorite: "",
    aboutme: ""
    
})

  constructor(private profile:ProfileService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profile.getUserProfile()
    .subscribe(res=>{
        this.user = res;

        this.user.forEach((a:any) => {
            Object.assign(a,{address:"somewhere"});
            
        });
    }) 
  }

  onClickMe(): void{
  this.aboutMe.value
  }
}




