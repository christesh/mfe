import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageoneComponent } from './pageone.component';
import { FirstcomponentPageoneComponent } from './components/firstcomponent-pageone/firstcomponent-pageone.component';
import { ScondcomponentPageoneComponent } from './components/scondcomponent-pageone/scondcomponent-pageone.component';
import { RouterModule, Routes } from '@angular/router';

const PAGEONE_ROUTES:Routes=[
  {
    path:'pageOne',
    component:PageoneComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PAGEONE_ROUTES)
  ],
  declarations: [
    PageoneComponent,
    FirstcomponentPageoneComponent,
    ScondcomponentPageoneComponent
  ]
})
export class PageoneModule { }
