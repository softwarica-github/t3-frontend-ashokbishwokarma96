import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogModule } from '@dashboard/shared/dialog/dialog.module';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from './service/login.service';
import { RegisterComponent } from './register/register.component';
import { ImageUploadModule } from 'angular2-image-upload';

@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    EntryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    MatButtonModule,
    ImageUploadModule.forRoot(),

  ],
  providers:[
    LoginService
  ]
})
export class EntryModule { }
