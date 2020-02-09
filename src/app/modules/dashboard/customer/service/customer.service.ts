import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerAdapter } from '../adapter/customer.adapter';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../model/customer.model';

@Injectable()
export class CustomerService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  urltoshowcustomer:string="http://localhost:3000/users/allusers/";
  urlforedit="http://localhost:3000/users/update/";
  urlforadd:string="http://localhost:3000/users/signup/";
  urlforupdate="http://localhost:3000/users/update/"
  urlfordelete="http://localhost:3000/users/delete/"

  private message= new BehaviorSubject(['']);
  public getMessage=this.message.asObservable();
    constructor(
      private http: HttpClient,
      private adapter: CustomerAdapter) { }
  
      get(): Observable<any> {
        return this.http.get(this.urltoshowcustomer).pipe(
          map((data: any[]) => {
            return data.map((item: any) => this.adapter.adapt(item));
        })
      );
    }
    add(data:any): Observable<Customer> {
      return this.http.post(this.urlforadd, data)
          .pipe(
              map((data: any) => {console.log(data); return data})
          );

    }

    getByID(id: string): Observable<any> {

      let uri=this.urlforedit+id;
      return this.http.get(uri).pipe();
    }
    
    update(data:any,id:any): Observable<any> {
      return this.http.patch(this.urlforupdate+id, data).pipe();
    }
    
    delete(id: string): Observable<any> {
      let uri=this.urlfordelete+id;
       return this.http.delete(uri).pipe();
    }

    setMessage(message):void{
      this.message.next(message);
          
  }
}
  
