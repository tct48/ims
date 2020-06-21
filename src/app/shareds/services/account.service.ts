import { Injectable } from '@angular/core';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class AccountService { // Service นี้คือ Global service
  constructor(
    private http: HttpService,
  ) { }

  //store user login ไว้s
  public UserLogin: IAccount = {} as any;
  public setUserLogin(UserLogin: IAccount) {
    this.UserLogin._id = UserLogin._id;
    this.UserLogin.firstname = UserLogin.firstname;
    this.UserLogin.lastname = UserLogin.lastname;
    this.UserLogin.email = UserLogin.email;
    this.UserLogin.position = UserLogin.position;
    this.UserLogin.role = UserLogin.role;
    this.UserLogin.image = UserLogin.image;
    this.UserLogin.created = UserLogin.created;
    this.UserLogin.updated = UserLogin.updated;
    this.UserLogin.year = UserLogin.year;

    return this.UserLogin;
  }

  public Observe: IAcademy = {} as any;
  public setAcademyObserve(Observe: IAcademy) {
    this.Observe._id = Observe._id;
    this.Observe.place = Observe.place;
    this.Observe.etc = Observe.etc;
    this.Observe.subdistrict = Observe.subdistrict;
    this.Observe.district = Observe.district;
    this.Observe.province = Observe.province;
    this.Observe.post_code = Observe.post_code;
  }

  // แก้ไขข้อมูลส่วนตัว Update profile
  onUpdateProfile(accessToken: string, model: any) {
    const x = "user/" + this.UserLogin._id;
    return this.http
      .requestPatch(x, accessToken, model)
      .toPromise() as Promise<IAccount>
  }

  // ดึงข้อมูลผู้ที่เข้าสู่ระบบจาก Token
  getUserLogin(accessToken: string) {
    return (this.http
      .requestGet('user/data', accessToken)
      .toPromise() as Promise<IAccount>)
      .then(userLogin => this.setUserLogin(userLogin));
  }

  // ดึงข้อมูล MEMBER ทั้งหมด
  getAllMember(accessToken: string) {
    return (this.http
      .requestGet("user", accessToken)
      .toPromise())
  }

  // เข้าสู่ระบบ
  onLogin(model: any) {

    return this.http
      .requestPost('user/login', model)
      .toPromise() as Promise<{ accessToken: string }>;
  }

  // ลงทะเบียน
  onRegister(model: any) {
    return this.http
      .requestPost('user/signup', model)
      .toPromise() as Promise<IAccount>;
  }

  //  เปลี่ยนรหัสผ่านใหม่
  onChangePassword(accessToken: string, model: any) {
    return this.http
      .requestPatch('user/change_password', accessToken, model)
      .toPromise() as Promise<IAccount>
  }

}

export interface IAccount {
  firstname: string;
  lastname: string;
  email: string;
  password: string;

  _id?: any;

  position?: string;
  image?: string;
  role?: number;
  created?: Date;
  updated?: Date;

  coordinator?:string;
  academy?:string;
  telephone?:string;
  year?:Number;
  classroom?:string;
}

// Service interface การประเมินผลการสอน
export interface IEvaluation{
  totalHour: Number,
  user:IAccount
}

export interface IAcademy {
  _id: any;
  place: string;
  etc: string;
  subdistrict: string;
  district: string;
  province: string;
  post_code: string;
}

export interface IAcademytoUser{
  academy: any;
  coordinator_name:string;
  tel: string;
  observe_date:Date;
}

export interface IObserve {
  _id?: any;
  subject: string;
  title: string;
}


export enum IRoleAccount {
  นักศึกษา = 1,
  ครูอาจารย์,
  ผู้ดูแลระบบ
}
