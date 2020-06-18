import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from '../../authentication.url';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shareds/services/alert.service';

@Component({
  selector: 'app-create-observe',
  templateUrl: './create-observe.component.html',
  styleUrls: ['./create-observe.component.css']
})
export class CreateObserveComponent implements OnInit {

  constructor(
    private router:Router,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
  }

  AppURL= AppURL;
  AuthURL= AuthURL;

  customSelected: string;
  statesComplex: any[] = [
    { id: 1, name: 'มัธยมต้น'},
    { id: 2, name: 'มัธยมปลาย'},
    { id: 3, name: 'ปวช.'},
    { id: 4, name: 'ปวส.'}
  ];

  onSubmit(){
    this.alert.success("เพิ่มข้อมูลสำเร็จ !")
    this.router.navigate(['/', AppURL.Authen, AuthURL.Observe]);
  }
}
