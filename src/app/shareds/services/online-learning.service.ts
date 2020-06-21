import { Injectable } from "@angular/core";
import { HttpService } from './http.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { AlertService } from 'src/app/shareds/services/alert.service';

@Injectable({
  providedIn: 'root'
})

export class OnlineLearningService {
  constructor(
    private http: HttpService,
    private https: HttpClient,
    private alert: AlertService
  ) { }

  getOnlineLearning(_id:any, accessToken:any){
    return this.http.requestGet(`online-learning/${_id}`, accessToken)
      .toPromise() as Promise<any>
  }

  getOnlineLearningByID(_id:string, accessToken:any){
    return this.http.requestGet(`online-learning/teaching/${_id}`, accessToken)
      .toPromise() as Promise<any>
  }

  createOnlineLearning(model: any){
    return this.http.requestPost('online-learning',model)
      .toPromise() as Promise<IOLearning>
  }

  deleteOnlineLearning(_id:any, accessToken?:any){
    return this.http.requestDelete('online-learning/',_id)
      .toPromise() as Promise<any>
  }
}

export interface IOLearning {
  _id:any;
  course:string,
  title:string,
  date: Date,
  user: string;
  url?: string;
}


