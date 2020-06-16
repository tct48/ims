import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/shareds/services/account.service';
import { AppURL } from 'src/app/app.url';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Builder } from 'protractor';
import { AuthURL } from 'src/app/authentication/authentication.url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(
    private alert:AlertService,
    private builder:FormBuilder,
    private router:Router,
    private account:AccountService,
    private activateRoute:ActivatedRoute,
  ) {
    this.activateRoute.params.forEach(params=>{
      this.returnURL=params.returnURL || `/${AppURL.Authen}/${AuthURL.Dashboard}`
    })

    this.initialCreateFormData();
   }

   Url = AppURL;
   form: FormGroup;
   returnURL:string;

   onSubmit(){
     if(this.form.invalid)
     return this.alert.something_wrong("กรุณากรอกข้อมูลครบถ้วน!");

     this.account.onLogin(this.form.value).then(result=>{
       this.alert.success("ยินดีต้อนรับเข้าสู่ระบบ");
       this.router.navigateByUrl(this.returnURL);
     })
     .catch(err=>this.alert.notify(err.Message));
   }

   private initialCreateFormData(){
     this.form = this.builder.group({
       email:['',Validators.required],
       password:['',Validators.required],
       remember: [true]
     })
   }

  ngOnInit() {
  }

}
