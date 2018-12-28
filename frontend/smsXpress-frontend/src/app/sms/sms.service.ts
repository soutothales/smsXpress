import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export const API_URL = "foo"; // a definir

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  sendSms(sms: String){
    return this.http.post(API_URL, {
      sms: sms
    }, {responseType: "text"})
  }

  getSms(protocol: String) {
    return this.http.get(API_URL); // alterar isso quando for definido a API_URL
  };

  constructor(private http: HttpClient) { }
}
