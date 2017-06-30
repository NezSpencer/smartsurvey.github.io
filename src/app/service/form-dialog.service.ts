import { Injectable } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {FormDialogComponent} from '../form-dialog/form-dialog.component';


@Injectable()
export class FormDialogService {
  dialogRef: MdDialogRef<FormDialogComponent> | null;
  config = {
    disableClose: true,
    panelClass: 'custom-overlay-pane-class',
    width: '400px',
    height: '500px'
  };
  nameStr: string;


  constructor(public dialog: MdDialog) {}
  openEmojiDialog() {
    this.dialogRef = this.dialog.open(FormDialogComponent, <MdDialogConfig>this.config);

    this.dialogRef.afterClosed()
      .subscribe(selection => {
        if (selection) {
          this.nameStr = selection;
        } else {
          // User clicked 'Cancel' or clicked outside the dialog
        }
      });
  }
/*  public openDialog(title: string, message: string): Observable<boolean> {

    let dialogRef: MdDialogRef<FormDialogComponent>;

    dialogRef = this.dialog.open(FormDialogComponent);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }*/


}
