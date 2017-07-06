import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule, MdInputModule,
  MdDialogModule, MdGridListModule
} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MdNativeDateModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {FormDialogComponent} from './component/form-dialog/form-dialog.component';
import {FormDialogService} from './service/form-dialog.service';
import {QuestionComponent} from './component/question/question.component';
import {RouterModule} from '@angular/router';
import {AppInfoService} from './service/app-info.service';
import {StartButtonComponent} from './component/start-button/start-button.component';
import {AppInfo} from './model/AppInfo';
import { ToastModule, ToastOptions } from 'ng2-toastr';
import { CustomOption } from './custom-option';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ColorPickerModule, ColorPickerService} from 'angular4-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    FormDialogComponent,
    QuestionComponent,
    StartButtonComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    MdButtonModule,
    MdToolbarModule,
    MdCheckboxModule,
    MdInputModule,
    NoopAnimationsModule,
    MdCardModule,
    FormsModule,
    HttpModule,
    MdNativeDateModule,
    ReactiveFormsModule,
    MdDialogModule,
    MdGridListModule,
    ColorPickerModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: StartButtonComponent
      },
      {
        path: 'question',
        component: QuestionComponent
      },
      {
        path: 'dashboard/:id',
        component: DashboardComponent
      }
    ])
  ],
  exports: [MdButtonModule, MdCheckboxModule, MdToolbarModule],
  providers: [FormDialogService, AppInfoService, AppInfo, ColorPickerService, {provide: ToastOptions, useClass: CustomOption}],
  entryComponents: [FormDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
