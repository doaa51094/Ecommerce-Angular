import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrandComponent } from './brand/brand.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:"home",component:HomeComponent,canActivate:[AuthGuard] , title:"home"},
  {path:"about",component:AboutComponent ,canActivate:[AuthGuard] , title:"about"},
  {path:"brands",component:BrandComponent ,canActivate:[AuthGuard] , title:"brands"},
  {path:"category",component:CategoriesComponent , canActivate:[AuthGuard] ,title:"category"},
  {path:"footer",component:FooterComponent ,canActivate:[AuthGuard] , title:"footer"},
  {path:"cart",component:CartComponent ,canActivate:[AuthGuard] , title:"cart"},
  {path:"product",component:ProductComponent ,canActivate:[AuthGuard] , title:"product"},


  {path:"login",component:LoginComponent , title:"login"},
  {path:"signup",component:SignupComponent , title:"signup"},









  {path:"**",component:NotFoundComponent , title:"not-found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
