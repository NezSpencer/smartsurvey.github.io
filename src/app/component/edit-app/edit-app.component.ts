import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {QuestionModel} from '../../model/QuestionModel';
import {ActivatedRoute} from '@angular/router';
import {AppInfoService} from '../../service/app-info.service';
import {AppModel} from '../../model/AppModel';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-app.component.html',
  styleUrls: ['./edit-app.component.css']
})
export class EditAppComponent implements OnInit, OnChanges, OnDestroy {



  private mQModel: QuestionModel = new QuestionModel;
  private qModel: any;
  SelectionStatusOfQuestion: any[] = [];
  color: any;
  mmId: any;
  namee: string;

  private appInfo: AppModel;
  private sub: any;

  constructor(private aRoute: ActivatedRoute, public mAppinfoService: AppInfoService) {
    this.mmId = aRoute.parent.snapshot.params['id'];
  }

  ngOnInit() {
    this.qModel = this.mQModel.mQuestion;
    this.color = '#127fcc';
    this.appInfo = new AppModel;
    this.getAppDetail()
    console.log('the parent passed id == ' + this.mmId)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAppDetail();
    this.namee = this.appInfo.appname;
}

  ngOnDestroy(): void {
  }


  onColorSelected(newColor: any) {
    console.log('selected color == ' + newColor);
  }

  getAppDetail() {
    this.sub = this.mAppinfoService.getAppById(this.mmId)
      .subscribe(mApp => {
        this.appInfo = mApp;
        this.namee = mApp.appname;
        console.log('app details question == ' + mApp.questions + ' name in dash == ' + this.namee)
        if (this.namee = '') {
          // this.loaded = true;
        }
      }, err => {
        console.log('app with id = ' + this.mmId + ' could not be loaded ' + ' error ' + err);
        // this.loaded = true;
      });
  }

}
