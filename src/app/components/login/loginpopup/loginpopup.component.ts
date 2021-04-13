import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-loginpopup',
  templateUrl: './loginpopup.component.html',
  styleUrls: ['./loginpopup.component.scss']
})
export class LoginpopupComponent implements OnInit {

  constructor(private loginService: UserLoginService, private router: Router,private dialog : MatDialog) {
    this.radioItems = ['Teacher', 'Student'];
   }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),

  });
  hide = true;
  teacherChecked: boolean;
  studentChecked: boolean;
  radioTitle: string;
  radioItems: Array<string>;
  model   = {option: 'option3'};

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.model.option);
    if(this.loginForm.valid){
      if(this.model.option === 'Teacher'){
        this.loginService.userLogin(this.loginForm.value).subscribe((data)=>{
          console.log(data);
          this.router.navigate(['registration']);
          })
      }   
      this.loginService.userLogin(this.loginForm.value).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['studentdashboard']);
        })

    }
  }

  }

