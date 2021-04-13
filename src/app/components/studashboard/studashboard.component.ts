import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studashboard',
  templateUrl: './studashboard.component.html',
  styleUrls: ['./studashboard.component.scss']
})
export class StudashboardComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
    this.openNav();
  }
   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
}
