import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PaginasComponent } from './paginas.component';
import { PlantillaModule } from '../plantilla/plantilla.module';

@NgModule({
  declarations: [
    InicioComponent,
    AcercaComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    ServiciosComponent,
    PaginasComponent,
  ],
  imports: [CommonModule, PaginasRoutingModule, PlantillaModule],
})
export class PaginasModule {}
