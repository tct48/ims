import { Component, OnInit } from '@angular/core';
import { NodeWithI18n } from '@angular/compiler';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from '../authentication.url';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = new Date();

  AppURL = AppURL
  AuthURL= AuthURL
  
      // pagination
      rotate = true;
      maxSize = 5;
      status = "ON";
}
