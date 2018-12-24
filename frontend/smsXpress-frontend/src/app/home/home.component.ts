import { Component, OnInit } from '@angular/core';
import { PageScrollInstance, PageScrollService, EasingLogic } from 'ngx-page-scroll';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private objApp: AppComponent;

  //private myEasing = this.objApp.myEasing;
  
  public constructor() {      
  }

  ngOnInit() { }

}

