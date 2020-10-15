import { ContactService } from './../service/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
show = '';
name;
  constructor(private cs: ContactService) { 
    // tslint:disable-next-line: deprecation
  }
  
 

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  setName(fullName){
    this.name = fullName;
  }
  getName(){
    return this.name;
  }
}
