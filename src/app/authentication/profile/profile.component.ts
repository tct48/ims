import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private alert:AlertService,
    private builder:FormBuilder
  ) { 
    this.inititalFormData();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.invalid){
      return this.alert.notify("กรุณากรอกข้อมูลให้ครบถ้วน !","แจ้งเตือน","warning")
    }
    var dumb = this.checkData();
    var percent:number;
    if(dumb==true){
      percent = 14;
    }else{
      percent = 8;
    }

    console.log(this.form.value);
    var model={
      name:this.name,
      address: this.address,
      sub_district: this.sub_district,
      district: this.district,
      province: this.province,
      post_code: this.post_code
    }

    console.log(model)

    this.percent = Math.round(percent*100/14);
    this.alert.success("เพิ่มข้อมูลสำเร็จ !")
  }

  form:any;
  isChecked:any;
  percent:number=0;

  // model2
  name:string;
  address:string;
  sub_district:string;
  district:string;
  province:string;
  post_code:string;

  teacher:string;
  phone:string; 

  inititalFormData(){
    this.form = this.builder.group({
      name:['', Validators.required],
      address: ['', Validators.required],
      subdistrict : ['', Validators.required],
      district : ['', Validators.required],
      province : ['', Validators.required],
      post_code : ['', Validators.required]
    })
  }

  checkData(){
    if(this.name && this.address && this.district && this.sub_district && this.province && this.post_code)
    return true
    return false
  }

  checkValue(event: any){
    console.log(event);
    this.name = this.form.controls['name'].value
    this.address = this.form.controls['address'].value
    this.sub_district = this.form.controls['subdistrict'].value
    this.district = this.form.controls['district'].value
    this.province = this.form.controls['province'].value
    this.post_code = this.form.controls['post_code'].value
 }

  checkPercent(){

  }
}
