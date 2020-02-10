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

  url:string="http://localhost:3000/users/";
  urlforadd:string="http://localhost:3000/users/signup/";

  private message= new BehaviorSubject(['']);
  public getMessage=this.message.asObservable();
    constructor(
      private http: HttpClient,
      private adapter: CustomerAdapter) { }
  
      get(): Observable<any> {
        return this.http.get(this.url).pipe(
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

      let uri=this.url+id;
      return this.http.get(uri).pipe();
    }
    
    update(data:any,id:any): Observable<any> {
      return this.http.patch(this.url+id, data).pipe();
    }
    
    delete(id: string): Observable<any> {
      let uri=this.url+id;
       return this.http.delete(uri).pipe();
    }

    setMessage(message):void{
      this.message.next(message);
          
  }
}
  

