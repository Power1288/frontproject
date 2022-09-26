import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

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
  formSuccess : undefined | string

  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router,private authService: AuthService) {
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
      return  "l'email est requis"
    }

    return this.email.hasError("email") ? 'email invalide' : ""
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
    }).subscribe({
      next:(data:any) => {
        console.log(data)
        this.formError = undefined
        this.formSuccess = "Connexion réussi avec success"
        this.authService.login = true
        this.authService.email = data.email
        this.authService.pseudo = data.pseudo
        this.authService.token = data.token
        this.authService.role = data.role

        setTimeout(() => {
          this.router.navigate([''])
        },2000)
      },
      error:(err) => {
        this.formError = err.error
      }
    })
  }

}
