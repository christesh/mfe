import { Component, OnInit,OnDestroy } from '@angular/core';
import { TabBodyService } from './tabBody.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabBody',
  templateUrl: './tabBody.component.html',
  styleUrls: ['./tabBody.component.css']
})
export class TabBodyComponent implements OnInit,OnDestroy {
  contractList: any[] = [];
  selectedContract: any;
  hideLayouRight: any;
  inDashbo: any;
  openLeft: any;
  uiSettings: any;
  agreementState: any;
  hideMarketWatch: any;
  hideMarketBar: any;
  hideComment: any;
  hideForum: any;
  showSymbol: any;
  setSelectedMainSection: number = 1;

  constructor(
    private tabBodyServices: TabBodyService,
    private router:Router
  ) { }
  subscribers: Subscription[] = []
  ngOnInit() {
    this.subscribers.push(this.tabBodyServices.GetDefualtMarketWatches().subscribe(
      res => {
        console.log(res)
        this.contractList = res
      },
      err => {
        console.log(err)
      }
    ))
  }
  ngOnDestroy(){
    this.subscribers.forEach(item=>{
      item.unsubscribe()
    })
  }
  showClassic(){
    this.setSelectedMainSection=1;
    this.router.navigate(['/pages/pageOne'])
  }
  showTechnical(){
    this.setSelectedMainSection=2;
    this.router.navigate(['/pages/Technical'])
  }
}
