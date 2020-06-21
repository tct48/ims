import { Injectable } from "@angular/core";
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { AccountService } from 'src/app/shareds/services/account.service';
import { AuthenService } from './authen.service';


@Injectable({
  providedIn: 'root'
})

export class ResearchService {
  constructor(
    private http: HttpService,
    private https: HttpClient,
    private alert: AlertService,
    private account: AccountService,
    private authen: AuthenService,
  ) {
    this.account.getUserLogin(this.authen.getAuthenticated());
  }

  public items=null;

  getResearch(_id?: string) {
    this.items = this.http.requestGet(`research/${_id}`)
      .toPromise() as Promise<IResearch>;
    return this.items;
  }

  getResearchByID(_id?:string){
    return this.http.requestGet(`research/item/${_id}`)
      .toPromise() as Promise<any>
  }

  postResearch(model:any){
    return this.http.requestPost('research/',model)
      .toPromise() as Promise<IResearch>
  }

  deleteResearch(_id?:string){
    return this.http.requestDelete(`research/`,_id).toPromise() as Promise<IResearch>
  }

  updateResearch(_id?:string,model?:any){
    return this.http.requestPatch(`research/${_id}`,this.authen.getAuthenticated(),model)
      .toPromise() as Promise<IResearch>;
  }
}

export interface IResearch {
  _id: String,
  title: String,
  chapter: Number,
  date: Date,
  user: String,
  status: Number,
  url: String
}
