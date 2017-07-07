import {Component, OnInit, OnChanges, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {AppModel} from '../../model/AppModel';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {AppInfoService} from '../../service/app-info.service';
import {FormDialogService} from '../../service/form-dialog.service';


declare var swal: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges, OnDestroy {



  private mId: any;
  /*private appInfo: AppModel;
  loaded: boolean;
  namee: string;
  private sub: any;
  private config = {
    disableClose: true,
    panelClass: 'custom-overlay-pane-class',
    /!*width: '400px',
    height: '500px'*!/
  };

  private dialogRef: MdDialogRef<ConfirmDialogComponent>;*/

  constructor(aRoute: ActivatedRoute, public appInfoService: AppInfoService,
              public fdservice: FormDialogService, public dialog: MdDialog, public router: Router) {
    this.mId = aRoute.snapshot.params['id'];
  }

  ngOnChanges() {
    // this.getAppDetail();
  }

  ngOnInit() {
/*    this.appInfo = new AppModel;
    this.loaded = false;
    this.getAppDetail();*/
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }


  reloadDashBoard() {
    setTimeout(() => {
      this.router.navigate(['dashboard', this.mId]);
    }, 1000);
  }/*
  showAlert() {
    swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      // cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then(function() {
      swal(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      );
    }, function (close) {
      // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
      if (close === 'cancel') {
        /!*swal(
         'Cancelled',
         'Your imaginary file is safe :)',
         'error'
         )*!/}
    })
  }*/

}
