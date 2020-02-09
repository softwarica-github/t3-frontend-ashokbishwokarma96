import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { BuyComponent } from './buy/buy.component';
import { BuyAdapter } from './adapter/buy.adapter';
import { BuyService } from './service/buy.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@dashboard/shared/dialog/dialog.module';
import { MatButtonModule } from '@angular/material/button';
import { TableModule } from '@dashboard/shared/table/table.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ProductService } from '../product/service/product.service';
import { ProductAdapter } from '../product/adapter/product.adapter';

@NgModule({
  declarations: [BuyComponent],
  imports: [
    CommonModule,
    BuyRoutingModule,
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
    BuyAdapter,
    BuyService,
    ProductService,
    ProductAdapter
    
  ]
})
export class BuyModule { }
