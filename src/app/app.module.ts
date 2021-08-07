import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import del modulo de plantilla
import { PlantillaModule } from './plantilla/plantilla.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PlantillaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
