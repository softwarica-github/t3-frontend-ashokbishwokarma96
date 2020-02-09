import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAdapter } from './adapter/customer.adapter';
import { CustomerService } from './service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@dashboard/shared/dialog/dialog.module';
import { MatButtonModule } from '@angular/material/button';
import { TableModule } from '@dashboard/shared/table/table.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { CustomerImageService } from './service/imageService.customer';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    FormsModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    TableModule,
    ImageUploadModule.forRoot(),
  ],
  providers:[
    CustomerAdapter,
    CustomerImageService,
    CustomerService
  ]
})
export class CustomerModule { }
