import { Component, ComponentFactoryResolver } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';

//    private apiUrl="http://localhost:8000/get";
// data:any={};y

//  constructor(private http:HttpClientModule){
//    this.getBrokerList();
//    this.getBrokerListData();

//  }
//  getBrokerList(){
//    return this.http.get(this.apiUrl)
//    .map((res: Response) => res.json()) }

// getBrokerListData(){
//   this.getBrokerList().subscribe(data => {
//     console.log(data);
//     this.data=data

//   })
//}


  email: string | undefined;
  password: string | undefined;
  e:string="rithvik";
  p:string="1234";
  b:boolean=true;
  
}

