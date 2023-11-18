import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { PAGES_ROUTES, PagesModule } from '../pages/pages.module';
import { PageoneComponent } from '../pages/pageone/pageone.component';
import { PagetwoComponent } from '../pages/pagetwo/pagetwo.component';
import { TabBodyComponent } from './components/tabBody/tabBody.component';
import { InfoComponent } from './components/header/info/info.component';
import { TechnicalComponent } from '../pages/technical/technical.component';
// export const PAGE_ROUTES:Routes = [
//   {
//     path: 'pages',
//     loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)
//   }

// ]
export const CORE_ROUTES:Routes = [ 
  {
    path:'pageOne',
    component:PageoneComponent
  },
  {
    path:'pageTwo',
    component:PagetwoComponent
  },
  {
    path:'Technical',
    component:TechnicalComponent
  },
  // { path: '', data: { title: 'full Views' }, children: PAGE_ROUTES },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CORE_ROUTES)
  ],
  declarations: [
    InfoComponent,
    TabBodyComponent,
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent],
  exports: [
    CoreComponent
  ]

})
export class CoreModule { }
