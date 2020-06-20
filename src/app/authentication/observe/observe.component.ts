import { Component, OnInit } from '@angular/core';
import { NodeWithI18n } from '@angular/compiler';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from '../authentication.url';
import { AccountService } from 'src/app/shareds/services/account.service';
import { ObserveService, IObserveDetail } from 'src/app/shareds/services/observe.service';
import { AlertService } from 'src/app/shareds/services/alert.service';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {

  constructor(
    private account:AccountService,
    private observer:ObserveService,
    private alert:AlertService
  ) { 
    this.loadObserver();
  }

  ngOnInit(): void {
  }
  data = new Date();

  AppURL = AppURL
  AuthURL= AuthURL
  
  // pagination
  rotate = true;
  maxSize = 5;
  status = "ON";

  items:any;
  total_items:number;
  total_hour:number;
  fullname:string;

  loadObserver(){
    this.observer.getObserveDetail(this.account.UserLogin._id).then(result=>{
      this.fullname = this.account.UserLogin.firstname + " " + this.account.UserLogin.lastname;

      this.items = result.items;
      this.total_items = result.total_items;
      if(result.totalHour>12){
        this.total_hour = 12 * 100 /12;
      }else{
        this.total_hour = result.totalHour * 100 /12;
      }

      console.log(result);
    })
  }

  onDelete(id:string){
    this.observer.deleteObserveDetail(id).then(result=>{
      this.alert.success("ลบข้อมูลสำเร็จ!");
      this.loadObserver();
    })
  }
}
