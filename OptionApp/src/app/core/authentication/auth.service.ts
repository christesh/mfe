import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ionlineuser } from '../models/Ionlineuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { 
  this.setNotification()
}

private onlineUse=new BehaviorSubject<Ionlineuser | null>(null);
private _onlineUse=this.onlineUse.asObservable();
getOnlineUser():Observable<any>{

  return this._onlineUse
}
setNotification(){
  let onlineUser={
    Title:'مسیح ابراهیم نژاد',
    BourseCode:'ابر6306',
    Version:'V1.0.0',
  }
  return this.onlineUse.next(onlineUser)
}

}
