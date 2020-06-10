import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public url: string = environment.url;

  constructor(private http: HttpClient) { }

  /*
     Function to get transaction list
  */
 transactionList(data) {
    return this.http.get(this.url + '/transaction');
  }

  /*
     Function to save transactions
  */
  transactionSave(data) {
    return this.http.post(this.url + '/transaction',data);
  }
}
