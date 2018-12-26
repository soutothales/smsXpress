import { Component, OnInit, Input } from '@angular/core';
import { PageScrollInstance, PageScrollService, EasingLogic } from 'ngx-page-scroll';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() myScrollOffset: number;
  @Input() myEasing: EasingLogic;
  
  public constructor() { }

  ngOnInit() { }

}

