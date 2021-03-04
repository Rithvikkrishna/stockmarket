import { Injectable } from '@angular/core';
import { Broker } from '../shared/broker';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {
  brokers:Broker[]=[
  
         { 
           "id":"1",
         "name": "rithvik",
          "password": "1234",
           "email": "Rithivk@123.com",
           "phone": 987654321
          },

        { 
          "id":"2",
          "name": "krishna",
           "password": "5678",
            "email": "Krishna@185.com",
            "phone": 987654321 
          },
        { 
          "id":"3",
          "name": "Sigala", 
          "password": "9874", "email": "Sigala@195.com","phone": 987654321 }
        
]
      
  

  constructor() { }
  onGet(){
    return this.brokers;
  }
}
