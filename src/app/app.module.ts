import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule, MdInputModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
    ReactiveFormsModule
  ],
  exports: [MdButtonModule, MdCheckboxModule, MdToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
