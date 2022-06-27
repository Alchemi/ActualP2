import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './register/register.component';

//SPARKEY YOU ADDED LINE 9-10. DELETE IF STUPID

const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'about', component:AboutComponent},
{path: 'contact', component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
