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
    }
  // tslint:disable-next-line: typedef
  onSubmit(form) {
   
    this.emailObj.push(form);
   
  }
  // tslint:disable-next-line: typedef
  submitted(s) {
    
  }

  onCheckBoxChange(){

  }
}
