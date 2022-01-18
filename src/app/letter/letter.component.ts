import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {

  subject:any;
  content:any;
  name:any;
  mobile:any;
  email:any;
  address:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  saveData(){
    const data = JSON.stringify({subject:this.subject, content:this.content, name:this.name, mobile:this.mobile, email:this.email, address:this.address});
    this.http.post('http://localhost/API/ng_letters.php',data).subscribe((res)=>{
      this.subject="";
      this.content="";
      this.name="";
      this.mobile="";
      this.email="";
      this.address="";
      // console.log("emon");b
    })

    }
  }
