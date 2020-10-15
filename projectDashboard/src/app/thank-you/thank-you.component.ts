import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {ContactService} from '../service/contact.service';
//import { HotkeysService, Hotkey } from 'angular2-hotkeys';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css'],
})
export class ThankYouComponent implements OnInit, OnChanges {
  contactList: any;
  showMsg = false;

  contactForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    phone: new FormControl('')
  });
  constructor(private contactService: ContactService,
              ) {}
 //private _hotkeysService: HotkeysService
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.contactService.getContacts().subscribe(data => {
      console.log('Data.....', data);
      this.contactList = data;
    });
  }

  // tslint:disable-next-line: no-trailing-whitespace
  
  addNewContact(){
    console.log(`Data from user fields`, this.contactForm.value);
    const reqData = {id: this.contactForm.value.id, name: this.contactForm.value.name, phone: this.contactForm.value.phone };
    this.contactService.postContact(reqData).subscribe(data => {
    this.showMsg = true;
    console.log('Final Data', data);
    });
  }


  editContact(id){
    const reqData = {id, name: 'Vismaya Ebin', phone: 1010101010100 };
    this.contactService.updateContact(id, reqData).subscribe(data => {
      console.log(`Updated Data`, data);
    });
  }

  getContact(){
    this.contactService.getConyactById().subscribe(data => {
      console.log(`Data---------->`, data);
    });
  }
}
