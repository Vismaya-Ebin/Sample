import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  location = '';
  constructor() { }

  setLocationName(lname){
    this.location = lname;
  }
  getLocation(){
    return true;
  }
}
