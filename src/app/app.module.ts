import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { BrokerLoginComponent } from '../broker/broker-login/broker-login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrokerlistComponent } from '../broker/brokerlist/brokerlist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrokerRegistrationComponent } from '../broker/broker-registration/broker-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrokerLoginComponent,
    AboutUsComponent,
    BrokerlistComponent,
    BrokerRegistrationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
