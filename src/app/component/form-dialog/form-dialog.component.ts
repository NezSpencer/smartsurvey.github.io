import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material';
import {AppInfo} from '../../model/AppInfo';


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

  constructor(public dialogRef: MdDialogRef<FormDialogComponent>, public fb: FormBuilder) {
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

}


