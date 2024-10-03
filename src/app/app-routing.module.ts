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


const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:"home",component:HomeComponent , title:"home"},
  {path:"about",component:AboutComponent , title:"about"},
  {path:"brands",component:BrandComponent , title:"brands"},
  {path:"category",component:CategoriesComponent , title:"category"},
  {path:"footer",component:FooterComponent , title:"footer"},
  {path:"cart",component:CartComponent , title:"cart"},
  {path:"product",component:ProductComponent , title:"product"},


  {path:"login",component:LoginComponent , title:"login"},
  {path:"signup",component:SignupComponent , title:"signup"},









  {path:"**",component:NotFoundComponent , title:"not-found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
