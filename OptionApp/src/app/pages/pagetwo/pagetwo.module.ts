import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagetwoComponent } from './pagetwo.component';
import { FirstcomponentPagetwoComponent } from './componnets/firstcomponent-pagetwo/firstcomponent-pagetwo.component';
import { SecondcomponentPagetwoComponent } from './componnets/secondcomponent-pagetwo/secondcomponent-pagetwo.component';
import { Routes } from '@angular/router';

const PAGETWO_ROUTS:Routes=[
  {
    path:'',
    component:PagetwoComponent
  }
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PagetwoComponent,
    FirstcomponentPagetwoComponent,
    SecondcomponentPagetwoComponent
  ],
  exports:[
    FirstcomponentPagetwoComponent,
    SecondcomponentPagetwoComponent
  ]
})
export class PagetwoModule { }
