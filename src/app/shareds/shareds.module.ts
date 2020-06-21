import { NgModule } from '@angular/core';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';
import { RouterModule } from '@angular/router';

// component module
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { SignaturePadModule } from '@ng-plus/signature-pad';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

// for froala
import 'froala-editor/js/froala_editor.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import 'froala-editor/js/plugins/code_beautifier.min.js';
import 'froala-editor/js/plugins/colors.min.js';
import 'froala-editor/js/plugins/emoticons.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/fullscreen.min';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';
import 'froala-editor/js/plugins/quick_insert.min.js';
import 'froala-editor/js/plugins/url.min.js';
import 'froala-editor/js/plugins/video.min.js';
import { MemberService } from './services/member.service';
import { DateAgoPipe } from '../pipes/date-ago.pipe';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SignaturePadModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'}),
    ButtonsModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    PaginationModule.forRoot(),
    FroalaEditorModule.forRoot(), 
    BsDatepickerModule.forRoot(),
    FroalaViewModule.forRoot(),
    ProgressbarModule.forRoot(),
    NgCircleProgressModule.forRoot({
      "backgroundOpacity": 1,
      "backgroundStrokeWidth": 0,
      "radius": 59,
      "space": 25,
      "outerStrokeWidth": 8,
      "innerStrokeWidth":0,
      "animationDuration": 1000,
      "showBackground": false,
      "startFromZero": false
    }),
  ],
  exports: [
    FormsModule,
    SignaturePadModule,
    ReactiveFormsModule,
    AuthContentComponent,
    AuthNavbarComponent,
    AuthSidebarComponent,
    // component
    TooltipModule,
    ButtonsModule,
    TypeaheadModule,
    PaginationModule,
    FroalaEditorModule,
    ProgressbarModule,
    FroalaViewModule,
    BsDatepickerModule,
    NgCircleProgressModule,
],

  declarations: [
    AuthContentComponent,
    AuthNavbarComponent,
    AuthSidebarComponent,
  ],
  providers: [
    AlertService,
    MemberService
  ],
})
export class SharedModule {}
