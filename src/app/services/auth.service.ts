import { Injectable } from '@angular/core';
import {UserRole} from "../enums/user-role";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _login:boolean = true;
  private _pseudo:string = "power"
  private _email:string = ""
  private _token : string = ""
  private _role : string = UserRole.admin
  private _staff : boolean = false
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

  public get role() : string {
    return this._role
  }

  public set role(role : string) {
    this._role = role

    if (this._role == UserRole.admin) {
      this.staff = true
      console.log(this.staff)
    }else {
      this.staff = false
    }
  }

  public get staff() : boolean {
    return this._staff
  }

  public set staff(staff: boolean) {
    this._staff = staff
  }

}
