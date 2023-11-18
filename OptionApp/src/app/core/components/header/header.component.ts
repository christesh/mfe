import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { Ionlineuser } from '../../models/Ionlineuser';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  onlineUser:any;
  showtoolbaruser:boolean=true;
  subscriptions: Subscription[]=[]
  constructor(
    private authService:AuthService,
  ) { }

  ngOnInit() {
    let authsubscription:Subscription= this.authService.getOnlineUser().subscribe(
      onlineUser=>{
        this.onlineUser=onlineUser
      }
    )
    this.subscriptions.push(authsubscription)
  }

  changeState(){

  }
  signOut(){

  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(item=>
      item.unsubscribe()
    )   
  }
}
