import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private api:ApiService){}

  username=""
  password=""

  

  readValue=()=>{
    let data:any={"username":this.username,"password":this.password}

    this.api.userLogin(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("login success")
        }else{
          alert("login failed")
        }
      }
    )
  }
  

}
