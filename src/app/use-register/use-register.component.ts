import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-use-register',
  templateUrl: './use-register.component.html',
  styleUrls: ['./use-register.component.css']
})
export class UseRegisterComponent {

  constructor(private api:ApiService,private route:Router){}

  address=""
  email = ""
  name = ""
  password = ""
  username = ""
  phone=""

  readValue=()=>{
    let data:any={"address":this.address,"email":this.email,"name":this.name,"password":this.password,
    "username":this.username,"phone":this.phone}
    if(this.email != "" && this.password != ""){
      this.api.userRegister(data).subscribe(
        (response:any)=>{
          if (response.status=="success") {
            console.log(response)
            alert("User Registration success")
            this.route.navigate(["/userlogin"])
          
          
        } else {
          alert("User Registration Failed")
          
        }
      }
    )
    }
    else{
      alert("email and password not given")
    }
    
  }
  
  


}
