import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  email = new FormControl('', Validators.required );
  pwd = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  constructor() {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  update(){
    this.email.setValue('Vismayawilson3@gmail.com');
    this.pwd.setValue('Vismayawilson3');
  }
  onSubmit(){
    alert('Submitted');
    console.log(this.profileForm.value);
  }
}
  // https://www.youtube.com/watch?v=IwHFnTDu4Nc

