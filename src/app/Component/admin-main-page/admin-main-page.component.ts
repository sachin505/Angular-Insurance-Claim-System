import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiOperationsService } from 'src/app/Service/rest-api-operations.service';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.css']
})
export class AdminMainPageComponent implements OnInit {
  showHome: boolean = true;
  showClaim: boolean = false;
  showReport: boolean = false;
  addRole: boolean = false;
  userName = new FormControl();
  password = new FormControl();
  roleCode = new FormControl();
  currentAdmin: string = "";
  generateReportValue: boolean = false;
  currentCustomer: any = {}
  newUser = {};
  errorMessage:string="";

  constructor(private router: Router, private http: RestApiOperationsService) { }
  allInsured: any = [];
  ngOnInit(): void {
    if (sessionStorage.getItem("admin") == null) {
      this.router.navigate(['/home']);
    }
    this.currentAdmin = JSON.stringify(sessionStorage.getItem("admin"));
    this.currentAdmin = JSON.parse(this.currentAdmin);
    this.getUserRoles();
    
  }
  ngDoCheck() {
    if (sessionStorage.getItem("admin") == null) {
      this.router.navigate(['/home']);
    }
  }
 getUserRoles(){
   this.http.getAllUserRoles().subscribe(data=>{
     console.log(data)
   })
 }
  showViewClaim() {
    this.showHome = false;
    this.showClaim = true;
    this.showReport = false;
    this.addRole = false;
    this.getAllClaims();
  }
  showViewGenerateReport(username: string) {
    this.showHome = false;
    this.showClaim = false;
    this.showReport = true;
    this.addRole = false;
    this.generateReport(username);
  }
  showCreateRole() {
    this.showHome = false;
    this.showClaim = false;
    this.showReport = false;
    this.addRole = true;
  }
  showAdminHome() {
    this.showHome = true;
    this.showClaim = false;
    this.showReport = false;
    this.addRole = false;
  }
  createUserRole() {
    if(this.userName.value && this.password.value && this.roleCode.value ){
    this.newUser = {
      id: this.userName.value,
      password: this.password.value,
      rolecode: this.roleCode.value
    };
    this.http.addUserRole(this.newUser).subscribe((data: {}) => {
      alert("User added successfully")
      console.log(data)
    })
  }
 

  else{
    this.errorMessage="Please fill details to create a UserRole"
  }
  }
  generateReport(username: string) {
    this.http.getInsured(username).subscribe((data: any) => {
      console.log(data)
      this.currentCustomer = data;
    })
    this.generateReportValue = true;
  }
  getAllClaims() {
    this.http.getAllInsured().subscribe((data: any) => {
      this.allInsured = data;
    })
  }
  logout() {
    sessionStorage.removeItem("admin");
  }
}
