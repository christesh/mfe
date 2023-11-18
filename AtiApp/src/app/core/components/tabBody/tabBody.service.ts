import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContractList, response } from '../../mocks/tabBody';
@Injectable({
  providedIn: 'root'
})
export class TabBodyService {
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient,
  ) { }
 
  GetDefualtMarketWatches(): Observable<any> {
    let contarctList = ContractList;
    let _ContractList = new BehaviorSubject(contarctList);
    return _ContractList
  }

}
