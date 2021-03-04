import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrokerLoginComponent } from '../broker/broker-login/broker-login.component';
import { BrokerlistComponent } from '../broker/brokerlist/brokerlist.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:BrokerlistComponent},
  {path:'home',component:HomeComponent},
  {path:'brokerlogin',component:BrokerLoginComponent},
  {path:'aboutus',component:AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
