import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BohaterComponent } from './components/bohater/bohater.component';
import { CechyComponent } from './components/cechy/cechy.component';
import { BronComponent } from './components/bron/bron.component';
import { PancerzComponent } from './components/pancerz/pancerz.component';
import { ZestawienieAkcjiComponent } from './components/zestawienie-akcji/zestawienie-akcji.component';
import { GraczComponent } from './components/gracz/gracz.component';
import { PunktyDoswiadczeniaComponent } from './components/punkty-doswiadczenia/punkty-doswiadczenia.component';
import { RuchWWalceComponent } from './components/ruch-w-walce/ruch-w-walce.component';
import { PunktyZbroiComponent } from './components/punkty-zbroi/punkty-zbroi.component';
import { UmiejetnosciComponent } from './components/umiejetnosci/umiejetnosci.component';
import { ZdolnosciComponent } from './components/zdolnosci/zdolnosci.component';
import { WyposazenieComponent } from './components/wyposazenie/wyposazenie.component';
import { PieniadzeComponent } from './components/pieniadze/pieniadze.component';
import { GlobalStylesComponent } from './shared/global-styles/global-styles.component';
import { OpisBohateraComponent } from './components/opis-bohatera/opis-bohatera.component';
import { ControlsComponent } from './components/controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    BohaterComponent,
    CechyComponent,
    BronComponent,
    PancerzComponent,
    ZestawienieAkcjiComponent,
    GraczComponent,
    PunktyDoswiadczeniaComponent,
    RuchWWalceComponent,
    PunktyZbroiComponent,
    UmiejetnosciComponent,
    ZdolnosciComponent,
    WyposazenieComponent,
    PieniadzeComponent,
    GlobalStylesComponent,
    OpisBohateraComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
