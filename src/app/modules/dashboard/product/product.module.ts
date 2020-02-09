import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductAdapter } from './adapter/product.adapter';
import { ProductService } from './service/product.service';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@dashboard/shared/dialog/dialog.module';
import { MatButtonModule } from '@angular/material/button';
import { TableModule } from '@dashboard/shared/table/table.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ProductImageService } from './service/imageService.product';

@NgModule({
  declarations: [ProductComponent, CreateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
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
    ProductAdapter,
    ProductImageService,
    ProductService
  ]
})
export class ProductModule { }
