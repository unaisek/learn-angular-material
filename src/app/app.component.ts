import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material';
  submitted = false;
  hide = true;
  constructor( private fb:FormBuilder){}

  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password: ['', [Validators.required]]
  });

  get allControls(){
    return this.loginForm.controls
  }

  onSubmit(values:any){
    this.submitted = true;
    console.log(values);
    
  }
}
