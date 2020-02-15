import { Adapter } from 'src/app/core/adapter';
import { Order } from '../model/order.model';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderAdapter implements Adapter<Order> {
    adapt(item: any): Order {
        return new Order(
            item._id,
            item.userEmail,
            item.productImage,
            item.productName,
            item.productPrice,
            item.quantity,
            );
    }
}

