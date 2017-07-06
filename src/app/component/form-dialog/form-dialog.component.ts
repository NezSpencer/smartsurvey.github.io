import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material';
import {AppInfo} from '../../model/AppInfo';
import {ColorPickerService} from 'angular4-color-picker';


@Component({
  moduleId: 'module.id',
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDialogComponent implements OnInit {
  rForm: FormGroup;
  private color: string;
  public myAppComponent: AppInfo;
  hideshowDial: boolean;
  // constructor() {}
  constructor(public dialogRef: MdDialogRef<FormDialogComponent>, public fb: FormBuilder, public cpService: ColorPickerService) {
    this.rForm = this.fb.group({
      appNamee: [null, Validators.required],
      appColore: [null, Validators.required],
      userEmaile: [null, Validators.required]
    });
    this.color = '#127cdc';
  }
  public ngOnInit() {
    this.myAppComponent = new AppInfo;

  }
  public saveForm() {
    // do the business logic
    this.dialogRef.close(this.myAppComponent);
    const mm = this.dialogRef.afterClosed().map(res => res.json);
    console.log(this.myAppComponent.userEmaile);
    console.log('sub mm inside form dia == ' + mm);
  }

  changeColor() {
    console.log('selected color == ' + this.color);
  }

}


