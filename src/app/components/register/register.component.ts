import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppURL } from 'src/app/app.url';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private builder: FormBuilder) {
    this.initialCreateFormData();
  }

  ngOnInit(): void {}

  form: any;
  password: string;

  Url = AppURL;

  checkModel: any = { left: false, middle: true, right: false };
  // สร้างฟอร์ม
  private initialCreateFormData() {
    this.form = this.builder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      year: ['', [Validators.required]],
      position: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
