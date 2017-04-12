import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule,AppRoutingModule,FormsModule, HttpModule ],
  declarations: [ AppComponent, routingComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
