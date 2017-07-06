import {Component, Inject, OnInit, Type, ViewContainerRef} from '@angular/core';
import {AppInfo} from '../../model/AppInfo';
import {Question} from '../../question.interface';
import {FormDialogService} from '../../service/form-dialog.service';
import {AppInfoService} from '../../service/app-info.service';
import {ToastsManager, Toast} from 'ng2-toastr';
import {Router} from '@angular/router';

export class OnCreateResponse {
  status: string;
  appid: string;
}

@Component({
  moduleId: 'module.id',
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  mmC: AppInfo;
  formcc: FormDialogService;
  retAppi: AppInfo;
  respObj: OnCreateResponse;
  surveyUrl: string;
  submitPending: boolean;
  SelectionStatusOfMutants: any[] = [];
  // SelectionStatusOfMutants: any = {};
  public questions: Question[] = [
    {id: 1, question: 'What is your preferred closure time from work'},
    {id: 2, question: 'What is your favorite Nigerian Network'},
    {id: 3, question: 'What is your most loved programming language'},
    {id: 4, question: 'Will you say you prefer Angular 1 to Angular'},
    {id: 5, question: 'Which Android OS have you enjoyed till date'},
    {id: 6, question: 'What do you believe is the problem of Nigeria as a Nation'},
    {id: 7, question: 'Do you think Biafra should be given their own republic'},
    {id: 8, question: 'Can we know your favorite color'},
    {id: 9, question: 'What will you say is the most important technology breakthrough till date'},
    {id: 10, question: 'Do you think Google\'s Assistant is ready to compete with Apple\'s Siri'}
  ];

  constructor(private fdService: FormDialogService,
              private appInfoService: AppInfoService,
              private toastr: ToastsManager, vRef: ViewContainerRef, private router: Router) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
    this.mmC = new AppInfo;
    this.mmC.hasValue = false;
    this.submitPending = true;
    this.retAppi = new AppInfo;
    this.respObj = new OnCreateResponse;
    this.surveyUrl = 'http://34.211.157.223/smartsurvey_api/public/api/v1/Question';
  }

  imChecked() {
    let count = 0;
    Object.keys(this.SelectionStatusOfMutants).forEach((item, index) => {
      if (this.SelectionStatusOfMutants[item]) {
        count++;
      }
    });
    if (count > 0) {
      this.submitPending = false;
    } else {
      this.submitPending = true;
    }
  }

  updateOptions() {
    this.submitPending = true;
    const selecteds = Object.keys(this.SelectionStatusOfMutants)
      .filter((item, index) => {
        return this.SelectionStatusOfMutants[item];
      });
    this.mmC = this.fdService.getAppInfo();
    this.mmC.question = selecteds;
    this.retrievePosted();

  }

  retrievePosted() {
    this.appInfoService.postJson({
      'email': this.mmC.userEmaile,
      'appname': this.mmC.appNamee, 'colour': this.mmC.appColore,
      'questions': this.mmC.question
    }).subscribe(res => {
        // this.respObj = res;
        console.log('returned response from service == ' + res.status);
        console.log('returned response from service STR == ' + res.toString());
        console.log('returned response from service JSON == ' + res.appid);
        this.submitPending = true;
        this.showSuccess('We are creating your App, we will get back to you when we are done', 'success', res.appid)
        // this.router.navigate(['']);
      },
      error => {
        this.showError('An Error Occurred', 'error')
        this.submitPending = false;
        console.log('Error status code json = ' + error.json + ' \nerror status = ' + error.status);
        // this.loadAppInfo();
      });

  }

  /*loadAppInfo() {
   // Get all comments
   this.appInfoService.getAppById()
   .subscribe(
   comments => {
   console.log('returned my app info == ' + comments.apiurl + ' comm == ' + comments.questions);
   this.showSuccess('success', 'success')
   }, // Bind to view
   err => {
   // Log errors if any
   console.log('inside load app id error == ' + err.json);
   this.showError('Error', 'error')
   });
   }*/
  showSuccess(text: string, title: string, appId: any) {
    this.toastr.success(text, title, {toastLife: 3000, showCloseButton: false});
    setTimeout(() => {
      this.router.navigate(['dashboard', appId]);
    }, 5000);  // 5s
    // this.router.navigate(['']);
  }

  showError(text: string, title: string) {
    this.toastr.error(text, title);

  }

}
