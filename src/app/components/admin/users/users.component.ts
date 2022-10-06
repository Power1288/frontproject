import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList : any = []

  constructor(private http: HttpClient,private authService: AuthService,private router:Router) {
  }

  ngOnInit(): void {
    this.http.get(`${environment.apiUrl}/users/all`).subscribe({
      next:(data: any) => {
        console.log(data)
        this.usersList = data
      },
      error:(err) => {
        console.log(err)
      }
    })
  }

  handleDelete(userId:string) {
    const token = this.authService.token
    this.http.delete(`${environment.apiUrl}/users/${userId}`,{
      body: {token}
    }).subscribe({
      next:(data) => {
        console.log(data)
        this.usersList = this.usersList.filter((user:any) => user.id !== userId)
      },
      error:(err:any) => {
        console.log(err)
      }
    })
  }

  handleView(userId: string) {
    this.router.navigate(['admin/view',userId])
  }


}
