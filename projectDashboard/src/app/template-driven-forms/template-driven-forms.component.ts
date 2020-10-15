import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  formArray = [];
  constructor() { }

  ngOnInit(): void {
  }
  reset(){

      }
  submit(formDetails){
   
    this.formArray.push(formDetails.value);
    
  }

}
