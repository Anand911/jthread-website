import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  companyName = "Verteil Technologies Private Limited";
  user = {
    name : "Shyamkrishnan S N",
    username : "shhyaaam",
    email : "shyamkrzn@gmail.com"
  }

  constructor(private route: Router) {}
  redirectHome() {
    this.route.navigate(['home'])
  }
}
