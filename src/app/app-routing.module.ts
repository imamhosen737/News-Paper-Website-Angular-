import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LetterComponent } from './letter/letter.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [ {
  path: 'home', component: HomeComponent
},
{
  path: 'details/:id', component: DetailsComponent
},
{
  path: 'about', component: AboutComponent
},
{
  path: 'letter', component: LetterComponent
},
{
  path: 'contact', component: ContactComponent
},
{
  path: 'category', component: CategoryComponent
},

{
  path: '', redirectTo:'/home', pathMatch:'full'
},
{
  path: '**', component: NotfoundComponent
}];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
