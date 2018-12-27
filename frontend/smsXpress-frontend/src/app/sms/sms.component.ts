import { Component, OnInit } from '@angular/core';
import { ENTER, SPACE } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';


export interface Phone {
  phone: string;
}

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  readonly separatorKeysCodes: number[] = [ENTER, SPACE];
  phones: Phone[] = [ ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our phone
    if ((value || '').trim()) {
      this.phones.push({phone: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    console.log(this.phones);
  }

  remove(phone: Phone): void {
    const index = this.phones.indexOf(phone);

    if (index >= 0) {
      this.phones.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
