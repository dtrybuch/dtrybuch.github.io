import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  title: string = "Kontakt";

  personal: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
    rodo: new FormControl(false, [Validators.required]),
  });

  get firstNameInput() { return this.personal.get('firstName'); }
  get lastNameInput() { return this.personal.get('lastName'); }
  get emailInput() { return this.personal.get('email'); }
  get messageInput() { return this.personal.get('message'); }
  get rodoInput() { return this.personal.get('rodo'); }

  /**
   *
   */
  constructor( private mainTitle: Title) {
    this.mainTitle.setTitle(this.title);
  }

  isAnyError() {
    return this.firstNameInput?.errors || this.lastNameInput?.errors || this.emailInput?.errors || this.messageInput?.errors || this.rodoInput?.value == false;
  }

  sendMessage(){

  }
}
