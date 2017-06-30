import {Component, OnInit, Input} from '@angular/core';
import {Question} from './question.interface';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormDialogService} from './service/form-dialog.service';
import {FormDialogComponent} from './form-dialog/form-dialog.component';
import {MdDialogRef} from '@angular/material';

class AppInfo {
  name: string;
  // id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appInfo: AppInfo;
  hideShowStr: boolean;
  myForm: FormGroup;
  fdComp: FormDialogComponent;
  mref: MdDialogRef<FormDialogComponent>;
  cForm: FormGroup;
  name: '';
  public result: any;
  SelectionStatusOfMutants: any = {};
  public questions: Question[] = [
    {id: 1, question: 'What is your preferred closure time from work'},
    {id: 2, question: 'What is your favorite Nigerian Network'},
    {id: 3, question: 'What is your most loved programming language'},
    {id: 4, question: 'Will you say you prefer Angular 1 to Angular'},
    {id: 5, question: 'Which Android OS have you enjoyed till date'},
    {id: 6, question: 'What do you believe is the problem of Nigeria as a Nation'},
    {id: 7, question: 'Do you think Biafra should be given their own republc'},
    {id: 8, question: 'Can we know your favorite color'},
    {id: 9, question: 'What will you say is the most important technology breakthrough till date'},
    {id: 10, question: 'Do you think Google\'s Assistant is ready to compete with Apple\'s Siri'}
  ];
  /*  ngOnInit() {
   this.myForm = new FormGroup ({
   appName: new FormControl('', Validators.required)
   })
   }*/
  ngOnInit() {
    this.appInfo = new AppInfo;
    this.fdComp = new FormDialogComponent(this.mref, new FormBuilder );
  }


  onHideShow() {
    this.hideShowStr = true;
  }

  onMySubmit() {
    // this.name = post.name;
    console.log('Form Data: ');
    console.log(this.name);
    console.log(this.myForm.value.name);
    // console.log(post.name);
  }
  updateOptions() {
    const selecteds = Object.keys(this.SelectionStatusOfMutants).filter((item, index) => {
      return this.SelectionStatusOfMutants[item];
    });
    // this.appInfo = '';
    console.log(selecteds);
    console.log(this.myForm.value.name);
    console.log(this.appInfo.name);
  }
  public openMyDialog(hideshows: boolean) {
  this.fService
    .openEmojiDialog();
  this.hideShowStr = hideshows;
    // .subscribe(res => this.result = res);
}
  constructor(fb: FormBuilder, public fService: FormDialogService) {
    this.myForm = fb.group({
      name: [null, Validators.required],
    });
    this.appInfo.name = this.fdComp.rForm.value.appColore;
  }


}
