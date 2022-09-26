import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList : any = []

  constructor(private http: HttpClient) {
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

}
