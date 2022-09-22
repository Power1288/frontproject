import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  formRegister:FormGroup;
  email:FormControl;
  password:FormControl;

  constructor(private fb: FormBuilder) {
    this.email = fb.control("",[Validators.email,Validators.required])
    this.password = fb.control("",[Validators.required,Validators.minLength(6)])

    this.formRegister = fb.group({
      email:this.email,
      password:this.password
    })
  }

  ngOnInit(): void {
  }

  getMailErrorMessage() {
    if (this.email.hasError("required")) {
      return 'You must enter a value'
    }

    return this.email.hasError("email") ? 'not a valid email' : ""
  }

  getPasswordErrorMessage() : string {
    if (this.email.hasError("required")) {
      return "le mot de passe est requis"
    }else if(this.email.hasError("minlength")) {
      return "Votre mot de passe doit contenir au moin 6 caractère"
    }

    return ""
  }

}
