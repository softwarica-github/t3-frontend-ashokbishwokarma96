import { Adapter } from 'src/app/core/adapter';
import { Customer } from '../model/customer.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerAdapter implements Adapter<Customer> {
    adapt(item: any): Customer {
        return new Customer(
            item._id,
            item.name,
            item.email,
            item.phone,
            item.password,
            item.image,
            item.admin,
          
            // public id: string,
            // public name: string,
            // public email: string,
            // public phone: string,
            // public password: string,
            // public image: string,
            // public admin:string

            );
    }
}

