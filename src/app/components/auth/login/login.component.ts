import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  formLogin:FormGroup;
  email:FormControl;
  password:FormControl;
  formError : undefined | string;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.email = fb.control("",[Validators.email,Validators.required])
    this.password = fb.control("",[Validators.required,Validators.minLength(6)])

    this.formLogin = fb.group({
      email: this.email,
      password: this.password
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
    if (this.password.hasError("required")) {
      return "le mot de passe est requis"
    }else if(this.password.hasError("minlength")) {
      return "Votre mot de passe doit contenir au moin 6 caractère"
    }

    return ""
  }

  handleLogin() {
    this.http.post(`${environment.apiUrl}/auth/login`,{
      email:this.formLogin.value.email,
      password:this.formLogin.value.password
    })
  }

}
