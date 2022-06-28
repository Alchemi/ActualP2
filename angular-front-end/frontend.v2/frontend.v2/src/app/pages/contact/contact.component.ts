import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = this.formBuilder.group({
    name: "",
    last: "",
    email:"",
    phone:"",
    
})


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
  
    this.contactForm.reset();

}
}
