import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // typeahead
  selected: string;
  states: string[] = [
    '2563',
    '2564'
  ];

  radioModel = 'ALL';

  // pagination
  rotate = true;
  maxSize = 5;
  status = "ON";

  search:string;


  onLocation(location:string){
    var url:string = "https://www.google.co.th/maps/search/" + location;
    window.open(url, "_blank");
  }
}
