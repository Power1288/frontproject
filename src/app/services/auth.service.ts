import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _login:boolean = false;
  private _pseudo:string = ""
  private _email:string = ""
  private _token : string = ""

  constructor() { }

  public get login() : boolean {
    return this._login
  }

  public set login(value: boolean) {
    this._login = value
  }

  public get pseudo() : string {
    return this._pseudo
  }

  public set pseudo(pseudo: string) {
    this._pseudo = pseudo
  }

  public get email() : string {
    return this._email
  }

  public set email(email: string) {
    this._email = email
  }

  public get token() : string {
    if (localStorage.getItem("token")) {
      // @ts-ignore
      this._token = localStorage.getItem("token")
    }
    return this._token
  }

  public set token(token: string) {
    localStorage.setItem("token",token)
    this._token = token
  }
}
