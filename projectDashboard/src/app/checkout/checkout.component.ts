import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { CommonService } from '../service/common.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  formStatus = '';
  is_disable = false;
  locName = '';

  constructor(private fb: FormBuilder, private commonService: CommonService) {
    this.checkoutForm = fb.group({
      emailInput: new FormControl('', [
        Validators.minLength(5),
        Validators.email,
      ]),
      qty: new FormControl('', [Validators.required]),
      terms: new FormControl('', [Validators.requiredTrue]),
      items: this.fb.array([
        this.fb.group({
          itemId: ['1'],
          itemName: ['Dress'],
          itemDesc: ['Linen'],
          itemDone: ['', Validators.requiredTrue],
        }),
      ]),
    });
  }
  ngOnInit(): void {
    this.getNameOfTheComonent();
    // Take array length and value
    const arryDetails = this.checkoutForm.get('items').value;
    console.log(`Extracting Array Details`, arryDetails);
    // throw new Error('Method not implemented.');
    // Setting form Value using setValue()
    // If we are using setVAlue all form fields should be given
    // In PatchValue it is not mandatory to supply all values

    // this.checkoutForm.setValue({
    //   emailInput: 'wilsonPanikkattu@gmail.com',
    //   qty: 10,
    //   terms: true
    // });

    // patchValue

    this.checkoutForm.patchValue({
      emailInput: 'wilsonPanikkattu@gmail.com',
      qty: 10,
    });

    // to perform value change of each data
    // valueChange will return an Observable to get data from observable we have to subsxribe it

    // this.checkoutForm.get('emailInput').valueChanges.subscribe(data => {
    //     console.log(`Email Value--->`, data);
    //   });

    // to capture entire form changes
    this.checkoutForm.valueChanges.subscribe((formValues) => {
      console.log(`Form Data`, formValues);
    });
    this.checkoutForm.statusChanges.subscribe((status) => {
      console.log(` status Form Data`, status);
      this.formStatus = status;
      if (this.formStatus === 'VALID') {
        this.is_disable = true;
      } else {
        this.is_disable = false;
      }
    });
  }

  postData() {
    console.log(`Dataaaaa`, this.checkoutForm.value);
  }
  resetForm() {
    this.checkoutForm.get('items').reset();
  }
  remove(index) {
    alert(index);
    this.newData.removeAt(index);
  }
  get newData() {
    return this.checkoutForm.get('items') as FormArray;
  }
  addRow() {
    const rowlength = this.checkoutForm.get('items').value.length;
    const newLength = rowlength + 1;
    const newItem = this.fb.group({
      itemId: [newLength],
      itemName: [''],
      itemDesc: [''],
      itemDone: [''],
    });
    this.newData.push(newItem);
  }
  reset() {
    this.checkoutForm.reset();
    this.formStatus = ``;
    this.is_disable = false;
  }
  getNameOfTheComonent(){
    this.commonService.setLocationName('Am Checkout Page');
    let locNames = this.commonService.getLocation();
    if(locNames){
      alert(`Got true from get`);
      console.log(`Vismaya`,locNames);
    }
  }
}
