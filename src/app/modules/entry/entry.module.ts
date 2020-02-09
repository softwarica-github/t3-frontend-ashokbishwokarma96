import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogModule } from '@dashboard/shared/dialog/dialog.module';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from './service/login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    EntryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    MatButtonModule
  ],
  providers:[
    LoginService
  ]
})
export class EntryModule { }
