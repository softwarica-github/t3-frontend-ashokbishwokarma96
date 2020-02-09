import { Adapter } from 'src/app/core/adapter';
import { Product } from '../model/product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductAdapter implements Adapter<Product> {
    adapt(item: any): Product {
        return new Product(
            item._id,
            item.productName,
            item.productCode,
            item.productAvailability,
            item.productPrice,
            item.productImage,
            item.materialUsed,
            item.productQuantity,
            item.productDescription,
            item.productMadeDate
            );
    }
}

