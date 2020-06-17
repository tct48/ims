import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {
 
  constructor() {
  }

  ngOnInit(): void {
  } 

  // pagination
  rotate = true;
  maxSize = 5;
  status = "ON";

  editorContent:string;

  onSubmit(){
    console.log(this.editorContent)
  }

  points = [];
  signatureImage;

  showImage(data) {
    this.signatureImage = data;
  }
}
