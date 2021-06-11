import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  insuredLogin() {
    localStorage.setItem("rolecode", "Insured")
    this.router.navigate(["/login"])
  }
  agentLogin() {
    localStorage.setItem("rolecode", "Agent")
    this.router.navigate(["/login"])
  }
  adminLogin() {
    localStorage.setItem("rolecode", "Admin")
    this.router.navigate(["/login"])
  }
}
