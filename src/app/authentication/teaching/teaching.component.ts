import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // pagination
  rotate = true;
  maxSize = 5;
  status = "ON";
}
