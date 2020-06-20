import { Component, OnInit, Input, NgZone, Directive } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppURL } from 'src/app/app.url';

import { JsonPipe } from '@angular/common';

import { Cloudinary } from '@cloudinary/angular-5.x';
import {
  FileUploader,
  FileUploaderOptions,
  ParsedResponseHeaders,
} from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { AlertService } from 'src/app/shareds/services/alert.service';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private alert: AlertService,
  ) {
    this.initialForm();
  }

  ngOnInit():void{
    
  }

  Url = AppURL;
  form: FormGroup;
  role: string;

  positions: Position[] = [{ value: 'CED' }, { value: 'TCT' }];

  // ลงทะเบียน
  onSubmit() {
    if (this.form.invalid) return this.alert.something_wrong();
    // ส่งข้อมูลหา Server

  }

  // สร้างฟอร์ม
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
}
interface Position {
  value: string;
}
