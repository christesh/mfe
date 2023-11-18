import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  bourseBalance:string="10000000";
  firstCommodity={
    CommodityCssName:"GoldBox",
    TotalBuyOpenPositionLimit:'1000000',
    TotalSellOpenPositionLimit:'1000000',
    TotalBuyOpenPosition:'1000000',
    TotalSellOpenPosition:'1000000',
  }
  constructor() { 
  
  }

  ngOnInit() {
    
  }

}
