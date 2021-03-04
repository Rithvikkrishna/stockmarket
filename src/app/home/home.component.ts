import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor() {
    
   }
   myFun(){
    alert("You clicked on a stratagy!");
  }

  ngOnInit(): void {
    
  }
  myimage2:string="assets/images/stock1.jpg";
  myimage3:string="assets/images/stockimg-bg.jpg"
  
}
