import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiOperationsService } from 'src/app/Service/rest-api-operations.service';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: String = "";
  password: String = "";
  rolecode: String = "";
  userRoles: any = [];
  invalidCredentials:String=""
  constructor(private restApiService: RestApiOperationsService, private router: Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("rolecode"));
    this.rolecode = JSON.stringify(localStorage.getItem("rolecode"));
  }
  
 
  login() {
    this.restApiService.getAllUserRoles().subscribe((data: any) => {
      this.userRoles = data;
      console.log(this.userRoles);
      let flag = 0;
      for (var i = 0; i < this.userRoles.length; i++) {
        console.log(this.userRoles[i].id);
        if (this.username == this.userRoles[i].id && this.password == this.userRoles[i].password && this.rolecode == JSON.stringify(this.userRoles[i].rolecode)) {
          flag = 0;
          if (this.userRoles[i].rolecode === "Insured") {
            sessionStorage.setItem("insured",this.userRoles[i].id)
            this.router.navigate(["/insured"]);
          }
          else if (this.userRoles[i].rolecode === "Agent") {
            sessionStorage.setItem("agent",this.userRoles[i].id)
            this.router.navigate(["/agent"]);
          }
          else {
            sessionStorage.setItem("admin",this.userRoles[i].id)
            this.router.navigate(["admin"]);
          }
          break;
        }
        else {
          flag = 1;
        }
      }
      if (flag == 1) {
        this.invalidCredentials="invalid user"
      }
    })
  }

  formSubmitFun(obj:NgForm){
    this.username=obj.value.username;
    this.password=obj.value.password;
    }
}
