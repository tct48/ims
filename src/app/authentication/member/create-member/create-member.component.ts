import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { ActivatedRoute } from '@angular/router';
import { MemberService, IMember } from 'src/app/shareds/services/member.service';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from '../../authentication.url';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css'],
  providers: [MemberService]
})
export class CreateMemberComponent implements OnInit {

  constructor(
    private builder:FormBuilder,
    private alert:AlertService,
    private member:MemberService,
    private activateRouter: ActivatedRoute
  ) { 
    
    this.activateRouter.queryParams.forEach(params => {
      this._id = params.id;
      if(this._id){
        this.title="แก้ไขข้อมูลส่วนตัว"
        this.initialUpdateForm();
        this.loadUpdateForm();
      }else{
        this.initialForm();
      }
    })
  }

  ngOnInit(): void {
  }

  _id:string;
  title:string="เพิ่มสมาชิกใหม่"
  // typeahead
  selected: string;
  states: string[] = [
    '2563',
    '2564'
  ];

  classroom:string;
  role:string;
  search:string;
  image:string;

  AppURL = AppURL;
  AuthURL = AuthURL;

  form;
  firstname:string;
  lastname:string;

  initialForm(){
    this.form = this.builder.group({
      email:['', Validators.required],
      firstname:['', Validators.required],
      lastname: ['', Validators.required],
      password:['', Validators.required],
      classroom: ['', Validators.required],
      year: ['', Validators.required]
    })
  }

  initialUpdateForm(){
    this.form = this.builder.group({
      email:['', Validators.required],
      firstname:['', Validators.required],
      lastname: ['', Validators.required],
      classroom: ['', Validators.required],
      year: ['', Validators.required]
    })
  }

  loadUpdateForm(){
    this.member.getMemberByID(this._id).then(result=>{
      this.form.controls['email'].setValue(result.email)
      this.form.controls['firstname'].setValue(result.firstname)
      this.form.controls['lastname'].setValue(result.lastname)
      this.form.controls['year'].setValue(result.year)
      this.classroom = result.classroom;
      this.image = result.image
      this.firstname = result.firstname;
      this.lastname = result.lastname;
    })
  }

  onSubmit(){
    if(this.form.invalid){
      return this.alert.notify("กรุณากรอกข้อมูลให้ครบถ้วน!","แจ้งเตือน", "warning")
    }
    this.member.createMemeber(this.form.value).then(result=>{
      this.alert.success("เพิ่มข้อมูลสำเร็จ");
    })
  }

  onUpdate(){
    if(this.form.invalid || !this.classroom){
      return this.alert.notify("กรุณากรอกข้อมูลให้ครบถ้วน!","แจ้งเตือน", "warning")
    }

    this.member.updateMember(this._id,this.form.value).then(()=>{
      this.alert.success("แก้ไขข้อมูลสำเร็จ");
    })
  }
}
