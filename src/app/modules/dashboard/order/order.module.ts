import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import { OrderAdapter } from './adapter/order.adapter';
import { OrderService } from './service/order.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@dashboard/shared/dialog/dialog.module';
import { MatButtonModule } from '@angular/material/button';
import { TableModule } from '@dashboard/shared/table/table.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { OrderImageService } from './service/imageService.order';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
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
    OrderAdapter,
    OrderImageService,
    OrderService
  ]
})
export class OrderModule { }
