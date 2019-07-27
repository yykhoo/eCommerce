import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  router: Router;
  showAccountDropdown:boolean;

  constructor( router: Router){
    this.router = router;
  }

  ngOnInit(){


  }

  home(){
    const parameters={
  
    }; this.router.navigate(["/eCommerce/"])
  }

  toggleAccount(){
    this.showAccountDropdown=!this.showAccountDropdown;

  }
  
}
