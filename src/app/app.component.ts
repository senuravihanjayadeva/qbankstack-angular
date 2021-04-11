import { Route } from '@angular/compiler/src/core';
import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'qbankstack-angular';
  ngOnInit(): void {
   
  }
}
