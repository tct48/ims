import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MemberService } from 'src/app/shareds/services/member.service';
import { AccountService } from 'src/app/shareds/services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MemberService]
})
export class ProfileComponent implements OnInit {
  constructor(
    private alert: AlertService, 
    private builder: FormBuilder,
    private member: MemberService,
    private account: AccountService,
  ) {
    this.inititalFormData();
    this.initialUpdateForm();
  }

  ngOnInit(): void {}

  form: any;
  isChecked: any;
  percent: number = 0;

  // model2
  name: string;
  address: string;
  sub_district: string;
  district: string;
  province: string;
  post_code: string;

  teacher: string;
  phone: string;

  inititalFormData() {
    this.form = this.builder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      sub_district: ['', Validators.required],
      district: ['', Validators.required],
      province: ['', Validators.required],
      post_code: ['', Validators.required],
      name2: ['', Validators.required],
      address2: ['', Validators.required],
      sub_district2: ['', Validators.required],
      district2: ['', Validators.required],
      province2: ['', Validators.required],
      post_code2: ['', Validators.required],
      teacher_name: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  initialUpdateForm(){
    this.member.getMemberByID(this.account.UserLogin._id).then(result=>{
      try{
        this.form.controls['name'].setValue(result.detail.observe.name);
        this.form.controls['address'].setValue(result.detail.observe.address);
        this.form.controls['sub_district'].setValue(result.detail.observe.sub_district);
        this.form.controls['district'].setValue(result.detail.observe.district);
        this.form.controls['province'].setValue(result.detail.observe.province);
        this.form.controls['post_code'].setValue(result.detail.observe.post_code);
        this.form.controls['name2'].setValue(result.detail.teaching.name2);
        this.form.controls['address2'].setValue(result.detail.teaching.address2);
        this.form.controls['sub_district2'].setValue(result.detail.teaching.sub_district2);
        this.form.controls['district2'].setValue(result.detail.teaching.district2);
        this.form.controls['province2'].setValue(result.detail.teaching.province2);
        this.form.controls['post_code2'].setValue(result.detail.teaching.post_code2);
        this.form.controls['teacher_name'].setValue(result.detail.teacher_name);
        this.form.controls['phone'].setValue(result.detail.phone);
        this.percent=100;
      }catch{

      }
    })
  }

  checkData() {
    if (
      this.name &&
      this.address &&
      this.district &&
      this.sub_district &&
      this.province &&
      this.post_code
    )
      return true;
    return false;
  }

  checkValue(event: any) {
    if (this.isChecked == true) {
      this.isChecked = false;
    } else {
      this.isChecked = true;
    }
    console.log(this.isChecked);
    this.form.controls['name2'].setValue(this.form.controls['name'].value);
    this.form.controls['address2'].setValue(this.form.controls['address'].value);
    this.form.controls['sub_district2'].setValue(this.form.controls['sub_district'].value);
    this.form.controls['district2'].setValue(this.form.controls['district'].value);
    this.form.controls['province2'].setValue(this.form.controls['province'].value);
    this.form.controls['post_code2'].setValue(this.form.controls['post_code'].value);
  }

  onSubmit() {
    if (this.form.invalid) {
      return this.alert.notify(
        'กรุณากรอกข้อมูลให้ครบถ้วน !',
        'แจ้งเตือน',
        'warning'
      );
    }
    var dumb = this.checkData();
    var percent: number;
    if (dumb == true) {
      percent = 14;
    } else {
      percent = 8;
    }
    var model = {
      detail: {
        observe: {
          name: this.form.controls['name'].value,
          address: this.form.controls['address'].value,
          sub_district: this.form.controls['sub_district'].value,
          district: this.form.controls['district'].value,
          province: this.form.controls['province'].value,
          post_code: this.form.controls['post_code'].value,
        },
        teaching: {
          name2: this.form.controls['name2'].value,
          address2: this.form.controls['address2'].value,
          sub_district2: this.form.controls['sub_district2'].value,
          district2: this.form.controls['district2'].value,
          province2: this.form.controls['province2'].value,
          post_code2: this.form.controls['post_code2'].value,
        },
        teacher_name: this.form.controls['teacher_name'].value,
        phone: this.form.controls['phone'].value,
      },
    };

    console.log(model);

    this.member.updateMember(this.account.UserLogin._id, model).then(result=>{
      this.alert.success('เพิ่มข้อมูลสำเร็จ !');
      this.percent = Math.round((14 * 100) / 14);
    })

    
  }

  checkPercent() {}
}
