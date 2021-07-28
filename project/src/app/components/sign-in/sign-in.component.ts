import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/component/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  ourValidation=new FormGroup({
    Username:new FormControl('',[Validators.required]),
    pass: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email])
  });
  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }
  get UsernameValid(){
    return this.ourValidation.controls.Username.valid;
  }
  get passValid(){
    return this.ourValidation.controls.pass.valid;
  }
  get EmailValid(){
    return this.ourValidation.controls.email.valid;
  }
}
