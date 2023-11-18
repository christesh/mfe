import { connectRouter } from '@angular-architects/module-federation-tools';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponentAti {
  @Input() onlineUser:any=undefined;
  constructor(
    private router: Router,
    private mainService: MainService
  ) {
    this.router.navigate(['core/pages/pageOne'])
  }
  title = 'AtiApp';
  ngOnInit(){
    if (!this.onlineUser){
      this.mainService.Login().subscribe(
        res=>{
         console.log(res)
        }
      );
    }
  }
}
