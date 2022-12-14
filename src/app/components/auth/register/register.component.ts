import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  formRegister:FormGroup;
  email:FormControl;
  password:FormControl;
  pseudo: FormControl;
  formError : undefined | string;

  constructor(private fb: FormBuilder, private http: HttpClient,private router : Router) {
    this.email = fb.control("",[Validators.email,Validators.required])
    this.password = fb.control("",[Validators.required,Validators.minLength(6)])
    this.pseudo = fb.control("",[Validators.required,Validators.minLength(6)])

    this.formRegister = fb.group({
      email: this.email,
      password: this.password,
      pseudo: this.pseudo
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

  getPseudoErrorMessage() : string {
    if (this.pseudo.hasError("required")) {
      return "le pseudo est requis"
    }else if(this.pseudo.hasError("minlength")) {
      return "Votre pseudo doit contenir au moin 6 caractère"
    }

    return ""
  }

  handleRegister() {

    this.http.post("http://localhost:3000/auth/register",{
      email:this.formRegister.value.email,
      password:this.formRegister.value.password,
      pseudo: this.formRegister.value.pseudo
    }).subscribe({
      next: (data) => {
        this.router.navigate(["login"])
      },
      error:(err) => {
        this.formError = err.error
      }
    })
  }

}
