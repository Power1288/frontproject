import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {


  formReset:FormGroup;
  email:FormControl;
  constructor(private fb: FormBuilder) {
    this.email = fb.control("",[Validators.email,Validators.required])
    this.formReset = fb.group({
      email:this.email
    })
  }

  ngOnInit(): void {
  }

}
