import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // typeahead
  selected: string;
  states: string[] = [
    '2563',
    '2564'
  ];

  classroom:string;
  role:string;
  search:string;
}
