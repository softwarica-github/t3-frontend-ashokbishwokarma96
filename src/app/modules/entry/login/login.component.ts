import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  
  submitted: boolean = false;

  errorMessage: string;

  constructor(private fb: FormBuilder,private router:Router,private service:LoginService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.createForm();
    // this.renderer.setStyle(this.document.body, "background", "#9a9a9a");

  }

  createForm() : void {
    this.loginForm = this.fb.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
    });
}

get field() {
    return this.loginForm.controls;
}

onSubmit():void{
  this.errorMessage = "You are not admin";
  this.submitted = true;
  let data = this.loginForm.value;
  if(this.loginForm.valid){
      this.service.login(data).subscribe(
          (data) => {

                  this.router.navigateByUrl('/dashboard');
              
          }
      );
}
}
}
