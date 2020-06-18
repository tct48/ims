import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';
import { AlertService } from 'src/app/shareds/services/alert.service';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {
 
  constructor(private alert:AlertService) {
  }

  ngOnInit(): void {
  } 

  // pagination
  rotate = true;
  maxSize = 5;
  status = "ON";

  editorContent:string;

  onSubmit(){
    this.alert.success("เพิ่มข้อมูลสำเร็จ !")
    console.log(this.editorContent)
  }

  points = [];
  signatureImage;

  showImage(data) {
    this.signatureImage = data;
  }
}
