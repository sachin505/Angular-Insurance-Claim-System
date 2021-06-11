import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InsuredClass } from 'src/app/Class/insured-class';
import { RestApiOperationsService } from 'src/app/Service/rest-api-operations.service';

@Component({
  selector: 'app-insured-main-page',
  templateUrl: './insured-main-page.component.html',
  styleUrls: ['./insured-main-page.component.css']
})
export class InsuredMainPageComponent implements OnInit {
  
  showPolicy: boolean = false;
  showClaim: boolean = false;
  showHome:boolean=true;
  addClaim: boolean = false;
  insuredData: any = {}
  claimNumber:number = 0;
  claimReason = new FormControl('',[Validators.required]);
  accidentLocationStreet = new FormControl('',[Validators.required]);
  accidentCity = new FormControl('',[Validators.required]);
  accidentState = new FormControl('',[Validators.required]);
  zipCode = new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]);
  claimType =new FormControl('',[Validators.required]);
  user: string = "";
  claim:any = {};
  errorMessage:string="";
  isClaimCreated:boolean=true;

  constructor(private restApiService: RestApiOperationsService, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("insured") == null) {
      this.router.navigate(['/home']);
    }
    this.user = JSON.stringify(sessionStorage.getItem("insured"));
    this.user = JSON.parse(this.user);
    this.restApiService.getInsured(this.user).subscribe((data: any) => {
      this.insuredData = data;
      console.log("Data of Insured ",data)
    })
  }
  ngDoCheck() {
    if (sessionStorage.getItem("insured") == null) {
      this.router.navigate(['/home']);
    }
  }
  showViewPolicy() {
    this.showHome = false;
    this.showPolicy = true;
    this.showClaim = false;
    this.addClaim = false;
  }
  showViewClaim() {
    this.showHome = false;
    this.showPolicy = false;
    this.showClaim = true;
    this.addClaim = false;
  }
  showCreateClaim() {
    this.showHome = false;
    this.showPolicy = false;
    this.showClaim = false;
    this.addClaim = true;
    this.claimNumber=Math. floor(Math. random() * (15000 - 500 + 1)) + 500;
  }
  showInsuredHome(){
    this.showHome = true;
    this.showPolicy = false;
    this.showClaim = false;
    this.addClaim = false;
  }
  createClaim() {
    
    if(this.claimReason.valid && this.accidentLocationStreet.valid && this.accidentCity.valid && this.accidentState.valid && this.zipCode.valid && this.claimType.valid){
    this.claim = {
      claimNumber: this.claimNumber,
      claimReason: this.claimReason.value,
      accidentLocationStreet: this.accidentLocationStreet.value,
      accidentCity: this.accidentCity.value,
      accidentState: this.accidentState.value,
      zipCode: this.zipCode.value,
      claimType: this.claimType.value
    }
  }
  else{
    this.errorMessage="Please fill details to create a claim"
    this.isClaimCreated=false;
  }
    if(this.isClaimCreated){
    this.insuredData = new InsuredClass(this.insuredData.id, this.insuredData.accountnumber, this.insuredData.agentname, this.insuredData.policynumber, this.insuredData.policypremium, this.insuredData.questions, this.claim)
    console.log("this is the created claim object ", this.insuredData)
    this.restApiService.addClaim(this.insuredData.id, this.insuredData).subscribe(data =>{
      console.log("Response", data)
      alert("claim created successfully")
    })
  }
}
  logout() {
    sessionStorage.removeItem("insured");
  }

}
