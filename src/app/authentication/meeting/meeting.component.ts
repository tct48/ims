import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MeetingService } from 'src/app/shareds/services/metting.service';
import { AccountService } from 'src/app/shareds/services/account.service';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { AuthenService } from 'src/app/shareds/services/authen.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
  providers: [ MeetingService ]
})
export class MeetingComponent implements OnInit {

  constructor(
    private builder: FormBuilder,
    private alert:AlertService,
    private authen: AuthenService,
    private account: AccountService,
    private meeting: MeetingService
  ) {
    this.initialForm();
    this.onLoadMeeting();
  }

  ngOnInit(): void {
  }

  editorContent:string;

  onSubmit(){
    var model = {
      date: this.form.controls['date'].value,
      message: this.form.controls['message'].value,
      user: this.account.UserLogin._id
    }
    this.meeting.postMeeting(model).then(result=>{
      this.alert.success("เพิ่มข้อมูลสำเร็จ !");
    })
  }

  onLoadMeeting(){
    this.meeting.getMeeting(this.authen.getAuthenticated()).then(result=>{
      this.items = result.item;
    })
  }

  onDelete(_id:string){
    this.meeting.deleteMeeting(_id).then(result=>{
      this.alert.success("ลบข้อมูลสำเร็จ !");
      this.onLoadMeeting();
    })
  }

  form:any;
  items: any;

  initialForm(){
    this.form = this.builder.group({
      date: ['',Validators.required],
      message: ['',Validators.required],
    })
  }
}
