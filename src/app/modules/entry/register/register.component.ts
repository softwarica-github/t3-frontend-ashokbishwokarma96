import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { DOCUMENT } from '@angular/common';
import { FileHolder } from 'angular2-image-upload';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  imagefile;
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
    this.registerForm = this.fb.group({
      name: ["", Validators.required],
        email: ["", Validators.required],
        phone: ["", Validators.required],
        password: ["", Validators.required],
        image: ["", Validators.required],
    });
}
onUploadFinished(file: FileHolder) {
  this.imagefile=file.file;
  this.registerForm.patchValue({
    image:this.imagefile.name
  })
  console.log(this.imagefile)
    }
get field() {
    return this.registerForm.controls;
}

onSubmit():void{
  this.errorMessage = "You are not admin";
  this.submitted = true;
  let data = this.registerForm.value;
  const formData = new FormData();

      formData.append('name', this.registerForm.value.name);
      formData.append('email', this.registerForm.value.email);
      formData.append('phone', this.registerForm.value.phone);
      formData.append('password', this.registerForm.value.password);
      formData.append('image', this.imagefile);
  if(this.registerForm.valid){
      this.service.register(formData).subscribe(
          (data) => {

                  this.router.navigateByUrl('/dashboard');
              
          }
      );
}
}

}
