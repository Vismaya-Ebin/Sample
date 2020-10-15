import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import {checkboxesDataList} from '../postDetails';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
})
export class TemplateFormsComponent implements OnInit {
  fruitsArray = ['Apple', 'Orange', 'Kiwi', 'Red Apple', 'Green Apple'];
  emailObj = [];
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  onCheckboxChange(data){
    console.log(`${data.fruitsArray}`);
  }
  // tslint:disable-next-line: typedef
  onSubmit(form) {
    console.log(`on submit for events`, form);
    this.emailObj.push(form);
    console.log('Array of Object', this.emailObj);
  }
  // tslint:disable-next-line: typedef
  submitted(s) {
    console.log('Submit--->', s);
  }

  onCheckBoxChange(){

  }
}
