import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { CartAdapter } from './adapter/cart.adapter';
import { CartService } from './service/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@dashboard/shared/dialog/dialog.module';
import { MatButtonModule } from '@angular/material/button';
import { TableModule } from '@dashboard/shared/table/table.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { CartImageService } from './service/imageService.cart';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
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
    CartAdapter,
    CartImageService,
    CartService
  ]
})
export class CartModule { }
