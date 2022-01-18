import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LetterComponent } from './letter/letter.component';
import { ContactComponent } from './contact/contact.component';


// const routes:Routes = [
//   {
//     path: 'home', component: HomeComponent
//   },
//   {
//     path: 'details', component: DetailsComponent
//   },
//   {
//     path: 'about', component: AboutComponent
//   },
//   {
//     path: 'category', component: CategoryComponent
//   },

//   {
//     path: '', redirectTo:'/home', pathMatch:'full'
//   },
//   {
//     path: '**', component: NotfoundComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    AboutComponent,
    CategoryComponent,
    NotfoundComponent,
    LetterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,
    // RouterModule.forRoot(routes,
    //   {
    //     enableTracing:true
    //   })
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
