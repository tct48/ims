import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shareds/services/alert.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {

  constructor(
    private builder:FormBuilder,
    private alert:AlertService
  ) { 
    this.initialForm();
  }

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

  form;

  initialForm(){
    this.form = this.builder.group({
      email:['', Validators.required],
      password:['', Validators.required],
      firstname:['', Validators.required],
      lastname: ['', Validators.required],
      classroom: ['', Validators.required],
      role: ['', Validators.required],
      year: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.form.invalid){
      return this.alert.notify("กรุณากรอกข้อมูลให้ครบถ้วน!","แจ้งเตือน", "warning")
    }
    this.alert.success("เพิ่มข้อมูลสำเร็จ");
    console.log(this.form.value)
  }
}
