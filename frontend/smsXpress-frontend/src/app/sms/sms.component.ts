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
  mensagem = "";

  showCar = false;
  custo: number;

  PHONE_PRICE = 0.10;
  CHAR_PRICE = 0.05;

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

  onSend() {
    if(this.phones.length < 1 || this.mensagem.length < 1) {
      if(this.phones.length < 1) {
        alert("insira um número de telefone"); // mudar isso para um toast
      } else {
        alert("insira um corpo na mensagem"); // mudar isso para um toast
      }
      
    } else {
      this.showCar = true;
      this.custo = this.calculateCost();         
    }

  }

  confirmSend() {
    
  }

  backToSms() {
    this.showCar = false;
    this.mensagem = "";
    this.phones = []
  }

  calculateCost() {
    var messageWithoutBlank = this.mensagem.trim();
    var messageWords = messageWithoutBlank.split(' ');

    var numChar = this.countChar(messageWords);

    var totalPhones = this.phones.length * this.PHONE_PRICE;
    var totalChar = Math.floor(numChar / 10) * this.CHAR_PRICE;

    return totalChar + totalPhones;
  }

  countChar(words) {
      var total = 0;
      for(var i = 0; i < words.length; i++){
          total += words[i].length;
      }

      return total;
  };


  formatProtocol(protocol) {
      var newProtocol = protocol.substring(0, 4) + '-' + protocol.substring(4, 8) + '-' + protocol.substring(8, 12);

      return newProtocol;
  };

  constructor() { }

  ngOnInit() {
  }

}
