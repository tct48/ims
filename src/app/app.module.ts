import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRouting } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http'
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Cloudinary module
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core'
import { FileUploadModule } from "ng2-file-upload";
import { DateAgoPipe } from './pipes/date-ago.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ProgressbarModule.forRoot(),
    ReactiveFormsModule,
    CloudinaryModule.forRoot({ Cloudinary }, {
      cloud_name: 'hxkuopm1o',
      upload_preset: 'exkxy5fg'
    } as CloudinaryConfiguration),
    FileUploadModule
  ],
  exports:[
    ProgressbarModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
