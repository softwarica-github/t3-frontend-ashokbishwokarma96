import { Adapter } from 'src/app/core/adapter';
import { Buy } from '../model/buy.model';
import { Injectable } from '@angular/core';

@Injectable()
export class BuyAdapter implements Adapter<Buy> {
    adapt(item: any): Buy {
        return new Buy(
            item._id,
            item.productName,
            item.productPrice,
            item.productImage,
            );
    }
}

