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
  signUpSubmitted =false
  hide = true;
  signUphide = true;

  jobes = [
    {id:1,name:"student"},
    {id:2,name:"employee"},
    {id:3,name:"self-employee"},
    {id:4,name:"business"}
  ]
  constructor( private fb:FormBuilder){}

  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password: ['', [Validators.required]],
    
  });

  signUpForm = this.fb.group({
    firstName:['',[Validators.required]],
    lastName: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    dob:['',[Validators.required]],
    job:['',[Validators.required]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]]
  }, {
    validator:()=>{
      console.log(this.signUpForm);
      if (this.signUpForm?.controls?.['password'].value != this.signUpForm?.controls?.['confirmPassword'].value ) {
        this.signUpForm?.controls?.['confirmPassword'].setErrors({passwordMismatch:true})
      }
    }
  }
  
  )

  get allControls(){
    return this.loginForm.controls
  }

  get allControlsdSignUp(){
    return this.signUpForm.controls
  }


  onSubmit(values:any){
    this.submitted = true;    
  }

  onSubmitSignUp(values:any){
    this.signUpSubmitted = true;
  }
}
