import { Component, OnInit } from '@angular/core';
import {
  IMember,
  MemberService,
  IMemberSearch,
} from 'src/app/shareds/services/member.service';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from '../authentication.url';
import { AlertService } from 'src/app/shareds/services/alert.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [MemberService],
})
export class MemberComponent implements OnInit {
  constructor(
    private member: MemberService,
     private router: Router,
     private alert: AlertService
  ) {
    this.loadMember();
  }

  ngOnInit(): void {}

  // typeahead
  selected: string = '2563';
  states: string[] = ['2563', '2564', '2565', '2566', '2567', '2568', '2569', '2570'];

  radioModel = 'ALL';

  // pagination
  rotate = true;
  maxSize = 5;
  status = 'ON';

  search: string;

  items: any;
  total_items: number;

  classroom="CED"

  option: IMemberSearch = {
    startPage: 0,
    limitPage: 5,
    searchType: this.radioModel,
    year: this.selected
  };

  loadMember() {
    this.option.year = this.selected;
    this.option.searchType = this.radioModel;

    console.log(this.option)
    this.member.getMembers(this.option).then((result) => {
      console.log(result)
      this.total_items = result.total_items;
      this.items = result.items;
    });
  }

  AppURL = AppURL;
  AuthURL = AuthURL;
  page: number;

  pageChanged(event: any): void {
    this.page = event.page;
    this.option.startPage=this.page-1
    this.option.year = this.selected;
    this.option.searchType = this.radioModel;

    this.member.getMembers(this.option).then(result=>{
      this.total_items = result.total_items;
      this.items = result.items;
    })
  }

  onFilterClassroom(){
    this.option.searchType = this.radioModel;
    this.member.getMembers(this.option).then(result=>{
      this.total_items = result.total_items;
      this.items = result.items
    })
  }

  onSearch(){
    if(this.selected==""){
      return this.alert.notify("กรุณาระบุปีการศึกษา","แจ้งเตือน", "warning");
    }

    this.option.searchType=this.radioModel;
    this.option.searchText=this.search;
    this.option.year = this.selected;
    this.option.searchType = this.radioModel;

    this.member.getMembers(this.option).then(result=>{
      this.total_items = result.total_items;
      this.items = result.items;
    })
  }

  onGoToUpdateMember(_id) {
    this.router.navigate(['', AppURL.Authen, AuthURL.CreateMember], {
      queryParams: { id: _id },
    });
  }

  onLocation(location: string) {
    var url: string = 'https://www.google.co.th/maps/search/' + location;
    window.open(url, '_blank');
  }

  onDelete(_id:string){
    this.member.deleteMember(_id).then(()=>{
      this.alert.success("ลบข้อมูลสำเร็จ");
      this.loadMember();
    })
  }
}
