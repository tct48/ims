import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // pagination
    rotate = true;
    maxSize = 5;
    status = "ON";
}
