import { Component, OnInit } from '@angular/core';
import { RegisterComponent} from '../register/register.component'
import { LoginComponent } from '../login/login.component';

const httpOptions   = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-type:application/json',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class AppComponent  {
  name = 'Angular 4';
  url = '';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  public delete(){
    this.url = null;
  }
}

export class UserprofileComponent implements OnInit {
  usrID!: String;
  username!: string;
  password!: String;
  email!:String;
  ccname!: String;
  ccnum!: String;
  fname!: String;
  lname!: String;
  phnum!: String;
  phadd!: String;
  user = {user_id: String,
          username: String,
          password: String,
          email_address: String,
          credit_card_name :String,
          credit_card_number : String,
          first_name: String,
          last_name: String,
          phone_number: String,
          physical_address: String
        };
  response : any ;
  msgError ="";
  Credentials = {withCredentials: true};
  public lusername= window.localStorage.getItem("username");

   ;
  s_username: any;
  constructor(private _http : HttpClient, private router : Router) { }
  getUserByUsername(lusername : any):Observable<HttpResponse<User>>{
    return this._http.get("http://localhost:3000/animeSQL/usercontroller/user" +lusername+"/", {observe: "response"}) as Observable<HttpResponse<User>>
    }
  ngOnInit(): void
  {
      //lusername= window.localStorage.getItem("username");
      console.log("sesion user.... "+window.localStorage.getItem("username"))
      let uname = window.localStorage.getItem("username");
      let luser = this.user;
      //this.username = uname;
      this.getUserByUsername(uname).subscribe(
        (data:any) =>{
          this.user = data;
          //let response: String = data.response;
          console.log(this.user)
          this.user = data.body;
          for(let usr of data.body)
          {
            this.username= usr.username;
            this.email=usr.email;
            this.fname=usr.firstname;
            this.lname=usr.lastname;
            this.phnum=usr.contactnumber;
            this.phadd=usr.address;
            this.usrID=usr.userid;
            this.password=usr.password;
          }
        }
      );
  }


  udpprfusr(){
    console.log(this.lusername);
    this.s_username= localStorage.getItem('username');
    console.log("session name"+this.s_username);
    let user = {
      userid: this.usrID,
      username:      this.username,
      password:      this.password,
      email: this.email,
      firstname: this.fname,
      lastname: this.lname,
      contactnumber: this.phnum,
      address: this.phadd
    };
console.log(this.username);
console.log(this.password);
console.log(user);
let Credentials = {withCredentials: true};
let response =this._http.put<any>("http://localhost:3000/animeSQL/authcontroller/user" +this.usrID+"/",user ,httpOptions,).subscribe (
{
next: (v) =>  this.router.navigate(['/profile.component']),  //console.log("reponse rcieved"),
error: (e) => console.error(this.msgError="User name or email  is alredy registred"),
complete: () => console.info('Complete')
});

console.log(response);

  }

}




