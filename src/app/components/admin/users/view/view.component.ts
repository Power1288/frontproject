import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {AuthService} from "../../../../services/auth.service";
import {UserRole} from "../../../../enums/user-role";


interface IVuser  {
  _id:string,
  email:string,
  pseudo:string,
  role:string
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute,private http: HttpClient,private authService : AuthService,private router :Router) { }

  public userData : IVuser | undefined ;
  roles = UserRole

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.params['id'])
    const token = this.authService.token
    this.http.get(`${environment.apiUrl}/users/${this.activeRoute.snapshot.params['id']}`,{
      headers: {token}
    }).subscribe({
      next:(data: any) => {
        this.userData = data
      },
      error:(err:any) => {
        console.log("err",err)
      }
    })
  };

  handleUpGrade(userId: string | undefined) {

      if (this.userData != undefined) {
        this.userData = {...this.userData,role:this.roles.admin}
        this.updateRole(userId)
      }

  }

  updateRole (userId : string | undefined) {
    this.http.put(`${environment.apiUrl}/users/${userId}`,{
      token : this.authService.token,
      role:this.userData?.role == this.roles.user ? this.roles.admin : this.roles.user
    }).subscribe({
      next:() => {
        console.log("Update load")
      },
      error:(err) => {
        console.log("an error",err)
      }
    })
  }

  handleDownGrade(userId: string | undefined) {
    if (this.userData != undefined) {
      this.userData = {...this.userData,role:this.roles.user}
      this.updateRole(userId)
    }
  }

  handleBack() {
    this.router.navigate(['/admin'])
  }

}
