import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginpopupComponent } from './loginpopup/loginpopup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dialog : MatDialog) { }
  ngOnInit(): void {
  this.openDialog();
  }
  openDialog() {
    const dialogRef = this.dialog.open(LoginpopupComponent);
     
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


