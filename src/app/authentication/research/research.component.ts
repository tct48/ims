import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shareds/services/alert.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  constructor(private alert:AlertService) { }

  ngOnInit(): void {
  }

    // pagination
    rotate = true;
    maxSize = 5;
    status = "ON";

    onSubmit(){
      this.alert.success("เพิ่มข้อมุลสำเร็จ !")
    }
}
