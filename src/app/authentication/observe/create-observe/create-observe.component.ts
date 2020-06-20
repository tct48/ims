import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from '../../authentication.url';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ObserveService } from 'src/app/shareds/services/observe.service';
import { AccountService } from 'src/app/shareds/services/account.service';

@Component({
  selector: 'app-create-observe',
  templateUrl: './create-observe.component.html',
  styleUrls: ['./create-observe.component.css'],
})
export class CreateObserveComponent implements OnInit {
  constructor(
    private router: Router,
    private alert: AlertService,
    private builder: FormBuilder,
    private observe: ObserveService,
    private account: AccountService,
  ) {
    this.initialForm();
  }

  ngOnInit(): void {}

  AppURL = AppURL;
  AuthURL = AuthURL;

  form: any;

  customSelected: string;
  statesComplex: any[] = [
    { id: 1, name: 'มัธยมต้น' },
    { id: 2, name: 'มัธยมปลาย' },
    { id: 3, name: 'ปวช.' },
    { id: 4, name: 'ปวส.' },
  ];

  initialForm() {
    this.form = this.builder.group({
      title: ['', Validators.required],
      subject: ['', Validators.required],
      class: ['', Validators.required],
      observe_date: ['', Validators.required],
      hour: ['', Validators.required],
      teacher_name: ['', Validators.required],
      questionare0: ['', Validators.required],
      questionare1: ['', Validators.required],
      questionare2: ['', Validators.required],
      questionare3: ['', Validators.required],
      questionare4: ['', Validators.required],
      questionare5: ['', Validators.required],
      questionare6: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return this.alert.notify(
        'กรุณากรอกข้อมูลให้ครบถ้วน !',
        'แจ้งเตือน',
        'warning'
      );
    }

    var model = {
      title: this.form.controls['title'].value,
      subject: this.form.controls['subject'].value,
      class: this.form.controls['class'].value,
      observe_date: this.form.controls['observe_date'].value,
      hour: this.form.controls['hour'].value,
      teacher_name: this.form.controls['teacher_name'].value,
      questionare0: this.form.controls['questionare0'].value,
      questionare1: this.form.controls['questionare1'].value,
      questionare2: this.form.controls['questionare2'].value,
      questionare3: this.form.controls['questionare3'].value,
      questionare4: this.form.controls['questionare4'].value,
      questionare5: this.form.controls['questionare5'].value,
      questionare6: this.form.controls['questionare6'].value,
      user: this.account.UserLogin._id
    };

    this.observe.createObserve(model).then((result) => {
      this.alert.success('เพิ่มข้อมูลสำเร็จ !');
      this.router.navigate(['/', AppURL.Authen, AuthURL.Observe]);
      console.log(result);
    });
  }
}
