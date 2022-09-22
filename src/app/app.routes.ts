import { Routes } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";

export const ROUTES : Routes = [
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent}
]