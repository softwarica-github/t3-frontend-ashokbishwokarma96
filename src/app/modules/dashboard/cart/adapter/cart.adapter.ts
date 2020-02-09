import { Adapter } from 'src/app/core/adapter';
import { Cart } from '../model/cart.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CartAdapter implements Adapter<Cart> {
    adapt(item: any): Cart {
        return new Cart(
            item._id,
            item.userEmail,
            item.productImage,
            item.productName,
            item.productPrice,
            item.quantity,
            );
    }
}

