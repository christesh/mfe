import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageoneModule } from './pageone/pageone.module';
import { PagetwoModule } from './pagetwo/pagetwo.module';
import { Route, RouterModule, Routes } from '@angular/router';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';

export const PAGES_ROUTES: Routes = [{
  path: 'pageOne',
   component:PageoneComponent,

},
{
  path: 'pageTwo',
   component:PagetwoComponent,
 
},
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(PAGES_ROUTES)
  ],
  declarations: [

  ],
  exports: [
    RouterModule,

  ]
})
export class PagesModule { }
