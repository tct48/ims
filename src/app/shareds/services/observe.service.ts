import { Injectable } from "@angular/core";
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class ObserveService {
  constructor(
    private http: HttpService,
    private https: HttpClient,
    private alert: AlertService,
    private sanitizer : DomSanitizer,
  ) { }

  createObserve(model: IObserveDetail, file?: any) {
    return this.http.requestPost('observe_detail/', model)
      .toPromise() as Promise<IObserveDetail>

    // return this.http.uploadFile('observe_detail/', file)
    //   .toPromise() as Promise<IObserveDetail>
  }

  observeData = null;
  observeVerifyData= null;

  getObserveDetail(userID: any) {
    try {
      this.observeData = this.http.requestGet(`observe_detail/${userID}`)
        .toPromise() as Promise<RObserveDetail>;
      return this.observeData;
    } catch{
    }
  }

  getObserveDetailByID(_id:string){
    return this.http.requestGet(`observe_detail/data/${_id}`)
      .toPromise() as Promise<any>
  }

  deleteObserveDetail(id: any) {
    return this.http.requestDelete(`observe_detail`,id)
    .toPromise() as Promise<IObserveDetail>;
  }

  getEmbedURL(url?: any) {
    if (url)
      return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}

export interface RObserveDetail{
  items:IObserveDetail[],
  total_items:number
}

export interface IObserveDetail {
  _id?: any,
  subject: String,
  title: String,
  class: String,
  observe_date: String,
  hour: Number,
  teacher_name: String,
  user: any,
  questionare0: String,
  questionare1: String,
  questionare2: String,
  questionare3: String,
  questionare4: String,
  questionare5: String,
  questionare6: String,
}

export interface IObserveVerify{
  otp_telephobe: String
}

export interface IObserveVerifyUpdate{
  code: String,
  telephone: String
}


