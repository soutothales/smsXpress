import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { SmsComponent } from './sms/sms.component';
import { HomeComponent } from './home/home.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { MatIconModule,
         MatChipsModule,
         MatFormFieldModule,
         MatChipInputEvent } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    SmsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgxPageScrollModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatFormFieldModule,
    // AppRoutingModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
