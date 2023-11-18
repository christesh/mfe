import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponentAti } from './app.component';
import { ShareModule } from './share/share.module';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './core/components/header/header.component';
import { InfoComponent } from './core/components/header/info/info.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [		
    AppComponentAti,
   ],
  imports: [
    CommonModule,
    HttpClientModule,
    ShareModule,
    CoreModule,
    PagesModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap:[]
})
export class AppModule { 
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef) {
    var hostname = `${document.location.hostname}:${document.location.port}`
    if (hostname.startsWith(environment.hostUrl))
      appRef.bootstrap(AppComponentAti);
    const ce = createCustomElement(AppComponentAti, {injector: this.injector});
    customElements.define('ati-mainapp', ce);
    customElements.define('ati-core', createCustomElement(CoreComponent, {injector: this.injector}));
    customElements.define('ati-headerinfo', createCustomElement(InfoComponent, {injector: this.injector}));
  }
}
