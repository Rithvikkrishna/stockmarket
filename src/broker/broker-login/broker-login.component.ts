import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Howler} from 'howler';


@Component({
  selector: 'app-broker-login',
  templateUrl: './broker-login.component.html',
  styleUrls: ['./broker-login.component.css']
})
export class BrokerLoginComponent implements OnInit {
  brokerloginForm:FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.brokerloginForm=new FormGroup(
      {
        email:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required,Validators.minLength(4)])
      }
    )

}
showme=true
myimage1:string="assets/images/b.jpg";



}



