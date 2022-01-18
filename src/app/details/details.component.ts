import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    id;
    details;
  constructor(private route: ActivatedRoute, private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getID();
      this.getDetails().subscribe((response)=>{
         console.log(response)
         this.details=response;
       })
      
    
  }
  getID(){
   this.id= this.route.snapshot.paramMap.get('id');
  }
  getDetails(){
    return this.httpClient.get('https://provaati.com/api/details.php?id='+this.id);
  }

  setDetails(){
    return this.details;
  }

}
