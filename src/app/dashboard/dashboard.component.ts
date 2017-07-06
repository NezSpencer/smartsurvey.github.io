import { Component, OnInit, OnChanges } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppInfoService} from '../service/app-info.service';
import {AppModel} from '../model/AppModel';


declare var swal: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {

  private mId: any;
  private appInfo: AppModel;
  loaded: boolean;
  namee: string;

  constructor(aRoute: ActivatedRoute, public appInfoService: AppInfoService) {
    this.mId = aRoute.snapshot.params['id'];
  }

  ngOnChanges() {
    this.getAppDetail();
  }

  ngOnInit() {
    this.appInfo = new AppModel;
    this.getAppDetail();
    console.log('name in onInit  == ' + this.namee)
  }

  editWithId() {

    console.log('DASHBOARD: ret id == ' + this.mId + ' app info name == ' + this.appInfo.appname);
  }

  getAppDetail() {
    this.appInfoService.getAppById(this.mId)
      .subscribe(mApp => {
        this.appInfo = mApp;
        this.namee = mApp.appname;
        console.log('app details question == ' + mApp.questions + ' name in dash == ' + this.namee)
      })
  }

  deleteApp() {
    swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      showLoaderOnConfirm: true,
      // cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then(
      this.appInfoService.deleteApp(this.mId)
        .subscribe(res => {
          console.log('app successfully deleted: ' + res)
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        }, err => {
          console.log('app not deleted: ' + err)
          swal(
            'Error!',
            'Request could not be completed',
            'error'
          );
        }), function (close) {
        // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        if (close === 'cancel') {
          /*swal(
           'Cancelled',
           'Your imaginary file is safe :)',
           'error'
           )*/
        }
      })
  }

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
        /*swal(
         'Cancelled',
         'Your imaginary file is safe :)',
         'error'
         )*/}
    })
  }

}
