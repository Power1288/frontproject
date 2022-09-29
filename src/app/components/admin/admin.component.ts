import { Component, OnInit } from '@angular/core';
import {AdminNav} from "../../enums/admin-nav";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  private _adminNav = AdminNav

  currentNav: string = AdminNav.addBook

  constructor() { }

  ngOnInit(): void {
  }

  handleNav(value:string) {
    this.currentNav = value
  }

  public get adminNav() {
    return this._adminNav
  }

}
