import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Claim } from 'src/app/Class/claim';
import { InsuredClass } from 'src/app/Class/insured-class';
import { RestApiOperationsService } from 'src/app/Service/rest-api-operations.service';

@Component({
  selector: 'app-agent-main-page',
  templateUrl: './agent-main-page.component.html',
  styleUrls: ['./agent-main-page.component.css']
})
export class AgentMainPageComponent implements OnInit {
  showHome: boolean = true;
  showCustomers: boolean = false;
  showClaim: boolean = false;
  addClaim: boolean = false;
  claim: Object = {};
  showCustomerList = false;
  showClaimList = false;
  showClaimForm = false;
  insures: any = [];
  user: string = "";
  agentCustomers: any = [];
  currentCustomer: any = {};
  claimNumber = 0;
  claimReason = new FormControl('',Validators.required);
  accidentLocationStreet = new FormControl();
  accidentCity = new FormControl();
  accidentState = new FormControl();
  zipCode = new FormControl();
  claimType = new FormControl();
  errorMessage:string="";

  constructor(private restApiService: RestApiOperationsService, private router: Router) { }

  showViewCustomers() {
    this.showHome = false;
    this.showCustomers = true;
    this.showClaim = false;
    this.addClaim = false;
  }
  showViewClaim(username: String) {
    this.showHome = false;
    this.showCustomers = false;
    this.showClaim = true;
    this.addClaim = false;
    this.getCustomer(username);
  }
  showCreateClaim(username: String) {
    this.showHome = false;
    this.showCustomers = false;
    this.showClaim = false;
    this.addClaim = true;
    this.claimNumber=Math. floor(Math. random() * (15000 - 500 + 1)) + 500;
    this.getCustomer(username);
  }
  showAgentHome(){
    this.showHome = true;
    this.showCustomers = false;
    this.showClaim = false;
    this.addClaim = false;
  }
  ngOnInit(): void {
    if (sessionStorage.getItem("agent") == null) {
      this.router.navigate(['/home']);
    }
    else {
      this.user = JSON.stringify(sessionStorage.getItem("agent"));
      this.user = JSON.parse(this.user);
      this.restApiService.getAllInsured().subscribe((data: any) => {
        this.insures = data;
        console.log(data);
      })
    }
    setTimeout(() => this.getAgentCustomers(), 3000)
  }

  ngDoCheck() {
    if (sessionStorage.getItem("agent") == null) {
      this.router.navigate(['/home']);
    }
  }
  getAgentCustomers() {
    for (var i = 0; i < this.insures.length; i++) {
      if (this.insures[i].agentname ==sessionStorage.getItem("agent")) {
        this.agentCustomers.push(this.insures[i]);
      }
    }
    console.log(this.agentCustomers, "Agent customers");
  }
  getCustomer(username: String) {
    for (var i = 0; i < this.insures.length; i++) {
      if (this.insures[i].id == username) {
        this.currentCustomer = this.insures[i];
      }
    }
    console.log("this is current customer", this.currentCustomer);
  }
  createClaim() {
    if(this.claimReason.value && this.accidentLocationStreet.value && this.accidentCity.value && this.accidentState.value && this.zipCode.value && this.claimType.value){
    this.claim = new Claim(this.claimNumber, this.claimReason.value, this.accidentLocationStreet.value, this.accidentCity.value, this.accidentState.value, this.zipCode.value, this.claimType.value);
    console.log(this.claim);
    this.currentCustomer = new InsuredClass(this.currentCustomer.id, this.currentCustomer.accountnumber, this.currentCustomer.agentname, this.currentCustomer.policynumber, this.currentCustomer.policypremium, this.currentCustomer.questions, this.claim);
    console.log(this.currentCustomer, "customer with claim");
    this.restApiService.addClaim(this.currentCustomer.id, this.currentCustomer).subscribe((data: any) => {
      console.log(data, "data");
      alert("Claim successfully created!");
    })
  }
  else{
    this.errorMessage="Please fill details to create a claim"
  }
  }
  logout() {
    sessionStorage.removeItem("agent");
  }
}
