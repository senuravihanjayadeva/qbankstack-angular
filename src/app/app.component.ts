import { Router } from '@angular/router';
import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Free-Mcq-platform';
  constructor(private router : Router){}
  ngOnInit(): void {
   this.router.navigate(['/login']);
  }
}
