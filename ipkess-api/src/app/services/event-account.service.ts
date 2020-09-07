import { RestReturn } from './../models/rest-return';
import { Account } from './../models/account';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class EventAccountService {
  
  url = 'https://ipkiss.pragmazero.com/';
  
  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  getAccountById(accountId: number): Observable<RestReturn> {
    //get balance by ID
    return this.httpClient.get<RestReturn>(this.url+'/balance?account_id=' + accountId);

  }
  reset(accountId: number): Observable<RestReturn> {
    //reset Data
    return this.httpClient.post<RestReturn>(this.url + '/reset', this.httpOptions);
  }
  eventOnAccount(data: Account) : Observable<RestReturn>{
    //in this method we can create, deposit, withdraw and tranfer.
    return this.httpClient.post<RestReturn>(this.url +'/event', JSON.stringify(data), this.httpOptions);
  }

}
