import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
mainStory;

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  this.getMainStory().subscribe((response)=>{
     console.log(response)
     this.mainStory=response;
   })
  }

 getMainStory(){
   return this.httpClient.get('https://provaati.com/api/get_main_story.php');
 }
 setMainStory(){
   return this.mainStory
 }
}
