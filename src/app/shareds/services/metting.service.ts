import { Injectable } from "@angular/core";
import { IAcademy, IAcademytoUser } from 'src/app/shareds/services/account.service';
import { HttpService } from './http.service';

@Injectable()

export class MeetingService {
  constructor(
    private http: HttpService
  ){}

  getMeeting(accessToken:string){
    return this.http.requestGet('meeting/')
    .toPromise() as Promise<any>
  }

  postMeeting(model:any){
    // console.log(model);
    return this.http.requestPost('meeting/', model)
      .toPromise() as Promise<IMeeting>
  }

  deleteMeeting(id:string){
    return this.http.requestDelete('meeting', id)
      .toPromise() as Promise<any>
  }
}

export interface IMeeting{
  _id?: string,
  user: string,
  url: string,
  message: string,
  date: Date,
  files:Array<any>
}
