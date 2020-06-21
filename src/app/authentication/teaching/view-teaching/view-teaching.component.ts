import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/shareds/services/account.service';
import { OnlineLearningService } from 'src/app/shareds/services/online-learning.service';
import { AuthenService } from 'src/app/shareds/services/authen.service';

@Component({
  selector: 'app-view-teaching',
  templateUrl: './view-teaching.component.html',
  styleUrls: ['./view-teaching.component.css']
})
export class ViewTeachingComponent implements OnInit {
  constructor(
    private alert:AlertService,
    private activateRoute: ActivatedRoute,
    private account: AccountService,
    private teaching : OnlineLearningService,
    private authen: AuthenService
  ) { 
    this.activateRoute.queryParams.forEach(params => {
      this._id = params.id;
      this.loadTeachingByID();
    })
  }

  _id:string;
  item:any;

  ngOnInit(): void {
  }

  loadTeachingByID(){
    this.teaching.getOnlineLearningByID(this._id,this.authen.getAuthenticated()).then(result=>{
      this.item = result.item;
    })
  }

}
