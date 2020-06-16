import { NgModule } from '@angular/core';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';
import { RouterModule } from '@angular/router';

// component module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    PaginationModule.forRoot(),
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
    })
    
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AuthContentComponent,
    AuthNavbarComponent,
    AuthSidebarComponent,
    // component
    TooltipModule,
    ButtonsModule,
    TypeaheadModule,
    PaginationModule,
    NgCircleProgressModule
],
  declarations: [
    AuthContentComponent,
    AuthNavbarComponent,
    AuthSidebarComponent,
  ],
  providers: [
    AlertService,

  ],
})
export class SharedModule {}
