import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { AuthenService } from 'src/app/shareds/services/authen.service';
import { AccountService } from 'src/app/shareds/services/account.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ResearchService } from 'src/app/shareds/services/research.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  constructor(
    private alert:AlertService,
    private authen: AuthenService,
    private account: AccountService,
    private builder : FormBuilder,
    private research: ResearchService,
    private activateRouter: ActivatedRoute
  ) { 
    this.activateRouter.queryParams.forEach(params => {
      this._id = params.id;
      if(this._id){
        this.loadReasearch(this._id);
      }else{
        this.loadReasearch();
      }
    })

    this.initialForm();
  }

  _id:string;

  ngOnInit(): void {
  }

    // pagination
    rotate = true;
    maxSize = 5;
    status = "ON";
    editorContent:string;

    onSubmit(){
      if(this.form.invalid){
        return this.alert.notify("กรุณากรอกข้อมูลให้ครบถ้วน !", "แจ้งเตือน", "warning")
      }

      var model ={
        title: this.form.controls['title'].value,
        chapter:  this.form.controls['chapter'].value,
        url: this.form.controls['url'].value,
        detail: this.form.controls['detail'].value,
        user: this.account.UserLogin._id
      }

      this.research.postResearch(model).then(()=>{
        this.alert.success("เพิ่มข้อมุลสำเร็จ !");
        this.loadReasearch();
      })
    }

    form:any;
    initialForm(){
      this.form = this.builder.group({
        title:['', Validators.required],
        chapter:['', Validators.required],
        url:['', Validators.required],
        detail:['', Validators.required]
      })
    }
    view_item:any;
    items:any;
    total_items: number;

    loadReasearch(_id?:string){
      if(_id){
        this.research.getResearch(_id).then(result=>{
          this.items = result.items;
          this.total_items = result.totalItem;
        })
        return;
      }
      
      this.research.getResearch(this.account.UserLogin._id).then(result=>{
        this.items = result.items;
        this.total_items = result.totalItem;
      })
    }

    onView(_id:string){
      this.research.getResearchByID(_id).then(result=>{
        this.view_item = result.item;
      })
    }

    onChangeStatus(_id:string, status:number){
      if(status==0){
        status=1;
      }else{
        status=0;
      }
      this.research.updateResearch(_id,{status:status}).then(result=>{
        this.alert.success("เปลี่ยนสถานะเรียบร้อยแล้ว !");
        this.loadReasearch();
      })
    }

    onDelete(_id:string){
      this.research.deleteResearch(_id).then(result=>{
        this.alert.success("ลบข้อมูลสำเร็จ !");
        this.loadReasearch();
      })

      this.view_item = null;
    }
}
