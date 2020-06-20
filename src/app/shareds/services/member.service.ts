import { Injectable, ChangeDetectorRef } from "@angular/core";
import { AccountService, IAccount, IRoleAccount } from 'src/app/shareds/services/account.service';
// import { HttpService } from 'src/app/authentication/services/http.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';
import { AuthenService } from './authen.service';
//  import { ObserveComponent} from 'src/app/authentication/components/observe/obs'';
@Injectable()

export class MemberService {
  constructor(
    private account: AccountService,
    private http: HttpClient,
    private https: HttpService,
    private authen: AuthenService,
    private detect: ChangeDetectorRef
  ) {
    // if (this.account.mockUserItems.length <= 1){
    //   this.generateMembers2();}
  }

  memberData = null;
  localAddress = "backend-ims.herokuapp.com";

  //ดึงข้อมูลสมาชิกทั้งหมด ของหน้า การประเมินผล
  getMembers(options?: IMemberSearch) {
    if(!options.searchText){
      options.searchText=''
    }

    if(options.searchType=="CED" || options.searchType=="TCT"){
      return this.https.requestGet(`user/classroom?sp=${options.startPage}&lp=${options.limitPage}&search=${options.searchText}&year=${options.year}&classroom=${options.searchType}`
      // this.memberData = this.https.requestGet(`user?${options.searchType}=${options.searchText}`
        , this.authen.getAuthenticated())
        .toPromise() as Promise<IMember>;
    }

    if(options.searchType=="ALL")
      return this.https.requestGet(`user?sp=${options.startPage}&lp=${options.limitPage}&year=${options.year}&search=${options.searchText}`
      // this.memberData = this.https.requestGet(`user?${options.searchType}=${options.searchText}`
        , this.authen.getAuthenticated())
        .toPromise() as Promise<IMember>;
  }

  //ดึงข้อมูลสมาชิกทั้งหมด ของหน้า การประเมินผล
  getMembers2(options?: IMemberSearch) {
    // console.log("Stay")
    if (!options.searchText) {
      options.searchText = "";
      options.searchType = "firstname";
    }

    if(options.year && options.position || (options.searchText != "")){
      this.memberData = this.https.requestGet(`user/member/${options.position}/${options.year}?sp=${options.startPage}&lp=${options.limitPage}&${options.searchType}=${options.searchText}`
      , this.authen.getAuthenticated())
      .toPromise() as Promise<IMember>;
    return this.memberData;
    }

    try {
      this.memberData = this.https.requestGet(`user?${options.searchType}=${options.searchText}&startPage=${options.startPage}&limitPage=${options.limitPage}`
        , this.authen.getAuthenticated())
        .toPromise() as Promise<IMember>;
      return this.memberData;
    } catch{
      this.memberData = this.https.requestGet(`user?${options.searchType}=${options.searchText}&startPage=${options.startPage}&limitPage=${options.limitPage}`
        , this.authen.getAuthenticated())
        .toPromise() as Promise<IMember>;
      return this.memberData;
    }
  }


  //ดึงข้อมูลจาก ID
  getMemberByID(id: any) {
    return this.https
      .requestGet(`user/${id}`, this.authen.getAuthenticated())
      .toPromise()
  }

  getMemberByID2(id: any) {
    return this.https
      .requestGet(`user/${id}`, this.authen.getAuthenticated())
      .toPromise() as Promise<IAccount>
  }


  //แก้ไขสมาชิก
  updateMember(id: any, model: IAccount) {
    if (id != this.account.UserLogin._id) {
      // this.account.mockUserItems = [];
      return this.http
        .patch('http://'+ this.localAddress + '/user/' + id, model)
        .toPromise() as Promise<IAccount>;
    }
    else {
      // this.account.mockUserItems = [];
      return this.http
        .patch('http://' + this.localAddress + '/user/' + this.account.UserLogin._id, model)
        .toPromise() as Promise<IAccount>;
    }
  }

  //ลบข้อมูลสมาชิก
  deleteMember(id: any) {
    return new Promise((resolve, reject) => {
      resolve(this.http.delete('http://'+ this.localAddress + '/user/' + id).toPromise());
    });
  }

  // เพิ่มข้อมูลสมาชิก
  createMemeber(model: IAccount) {
    return this.https.requestPost('user/signup', model)
      .toPromise() as Promise<IAccount>
  }


}

export interface IMemberSearch{
  searchType?:string;
  searchText?:string;
  position?: string;
  year?: string;

  startPage:number;
  limitPage: number;
}

export interface IMember{
  items: IAccount[];
  total_items: number;
}