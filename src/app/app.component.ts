import {Component, OnInit} from '@angular/core';
import {Question} from './question.interface';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

class AppInfo {
  name: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appInfo: AppInfo;
  submitted: false;
  myForm: FormGroup;
  name: '';
  post: any;
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
  }

  onMySubmit(post) {
    this.name = post.name;
    console.log('Form Data: ');
    console.log(this.myForm.value);
  }

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      name: [null, Validators.required]
    });
    // this.name = this.myForm.controls['name'];
  }
}
