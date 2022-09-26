import { Routes } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import {ResetComponent} from "./components/auth/reset/reset.component";
import {HomeBookComponent} from "./components/home-book/home-book.component";
import {AuthGuard} from "./guard/auth.guard";
import {AdminComponent} from "./components/admin/admin.component";
import {AdminGuard} from "./guard/admin.guard";

export const ROUTES : Routes = [
    {path:"",component:HomeBookComponent,canActivate:[AuthGuard]},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"reset",component:ResetComponent},
    {path:"admin",component:AdminComponent,canActivate:[AdminGuard]}
]
