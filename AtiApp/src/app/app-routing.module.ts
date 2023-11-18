import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { AppComponentAti } from './app.component';
import { WebComponentWrapper, WebComponentWrapperOptions, startsWith } from '@angular-architects/module-federation-tools';


const CORE_ROUTES: Routes = [
 
  {
    path: 'pages',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  
]

const routes: Routes = [
  {
    path: '',
    component: AppComponentAti
  },
  { path: 'core', component: CoreComponent, data: { title: 'full Views' }, children: CORE_ROUTES },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
