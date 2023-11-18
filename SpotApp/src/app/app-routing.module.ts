import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';


const CORE_ROUTES: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  }]

const routes: Routes = [
  { path: '', component: CoreComponent, data: { title: 'full Views' }, children: CORE_ROUTES },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
