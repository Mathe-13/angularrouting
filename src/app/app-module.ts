import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { CineComponent } from './components/cine-component/cine-component';
import { appRoutingProvider, routing } from './app.routing';
import { MenuComponent } from './components/menu-component/menu-component';
import { NumeroDobleComponent } from './components/numero-doble-component/numero-doble-component';
import { TablaMultiplicar } from './components/tabla-multiplicar/tabla-multiplicar';
import { MenuTabla } from './components/menu-tabla/menu-tabla';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    MenuComponent,
    NumeroDobleComponent,
    TablaMultiplicar,
    MenuTabla,
  ],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingProvider],
  bootstrap: [App],
})
export class AppModule {}
