import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { FormBuilder, Validators } from '@angular/forms';
import { OnlineLearningService } from 'src/app/shareds/services/online-learning.service';
import { AccountService } from 'src/app/shareds/services/account.service';
import { AuthenService } from 'src/app/shareds/services/authen.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from '../authentication.url';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css'],
})
export class TeachingComponent implements OnInit {
  constructor(
    private alert: AlertService,
    private builder: FormBuilder,
    private teaching: OnlineLearningService,
    private account: AccountService,
    private authen: AuthenService,
    private router: Router,
    private activateRote: ActivatedRoute,
  ) {
    this.activateRote.queryParams.forEach(params => {
      this._id = params.id;
      if(this._id){
        this.loadTeaching(this._id)
      }else{
        this.loadTeaching();
      }
    })
    
    this.initialForm();
  }

  ngOnInit(): void {}
  _id:string;

  // pagination
  rotate = true;
  maxSize = 5;
  status = 'ON';

  editorContent: string;

  onSubmit() {
    // var data = JSON.stringify()

    var model = {
      date: this.form.controls['date'].value,
      course: this.form.controls['course'].value,
      title: this.form.controls['title'].value,
      detail: this.form.controls['detail'].value,
      user: this.account.UserLogin._id,
    };

    this.teaching.createOnlineLearning(model).then(result=>{
      this.alert.success("เพิ่มข้อมูลสำเร็จ !")
      this.loadTeaching();
    });
  }

  points = [];
  signatureImage;
  form: any;

  items:any;
  total_items:any;

  showImage(data) {
    this.signatureImage = data;
  }

  initialForm() {
    this.form = this.builder.group({
      date: ['', Validators.required],
      course: ['', Validators.required],
      title: ['', Validators.required],
      url: [''],
      detail: ['', Validators.required],
    });
  }

  AppURL = AppURL;
  AuthURL = AuthURL;

  onView(_id){
    this.router.navigate(['', AppURL.Authen, AuthURL.TeachingView], {
      queryParams: { id: _id },
    });
  }

  onDelete(_id:string){
    this.teaching.deleteOnlineLearning(_id,this.authen.getAuthenticated()).then(()=>{
      this.alert.success("ลบข้อมูลสำเร็จ");
      this.loadTeaching();
    })
  }

  loadTeaching(_id?:string){
    if(!_id){
      this.teaching.getOnlineLearning(_id,this.authen.getAuthenticated()).then(result=>{
        this.items = result.items;
        this.total_items = result.totalItems;
      })
      return;
    }
    this.teaching.getOnlineLearning(this.account.UserLogin._id,this.authen.getAuthenticated()).then(result=>{
      this.items = result.items;
      this.total_items = result.totalItems;
    })
  }
}
