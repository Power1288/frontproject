import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {UserRole} from "../../enums/user-role";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }


  handleLogout() {
    this.authService.login = false
    this.router.navigate(['/login'])
  }

}
