import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material';
import {FormDialogService} from '../service/form-dialog.service';
import {AppInfo} from '../model/AppInfo';


@Component({
  moduleId: 'module.id',
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDialogComponent implements OnInit {
  rForm: FormGroup;
  public myAppComponent: AppInfo;
  hideshowDial: boolean;
  // constructor() {}
  constructor(public dialogRef: MdDialogRef<FormDialogComponent>, public fb: FormBuilder) {
    this.rForm = this.fb.group({
      appNamee: [null, Validators.required],
      appColore: [null, Validators.required],
      userEmaile: [null, Validators.required]
    })
  }
  public ngOnInit() {
    this.myAppComponent = new AppInfo;
    this.hideshowDial = true;
    this.myAppComponent.hasValue = false;

  }
  public saveForm(hidDia: boolean) {
    // do the business logic
    this.dialogRef.close(this.myAppComponent);
    console.log(this.myAppComponent.userEmaile)
    this.hideshowDial = hidDia;
  }

  /*  constructor(
   private fb: FormBuilder,
   private dialogRef: MdDialogRef<FormDialogComponent>) { }
   public ngOnInit() {
   this.form = this.fb.group({
   'appName' : this.appName,
   'appColor': this.appColor,
   'userEmail': this.userEmail}
   );
   }
   public saveForm() {
   // do the business logic
   }
   openDialog() {
   const mDialogRef = this.dialogRef.open(FormDialogComponent);

   // If you need a result from your dialog
   mDialogRef.afterClosed().subscribe(result => {
   // Do something with result, if needed.
   });
   }

   @HostListener('keydown.esc')
   public onEsc(): void {
   this.dialogRef.closeAll();
   }*/
}

/*  export class ConfirmDialog {

  public title: string;
  public message: string;

  constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {

  }*/


