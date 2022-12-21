import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { ContenidoComponent } from './Layout/contenido/contenido.component';
import { NavBarComponent } from './Layout/nav-bar/nav-bar.component';
import { AlumnosComponent } from './Pages/alumnos/alumnos.component';
import { CursosComponent } from './Pages/cursos/cursos.component';
import { ClasesComponent } from './Pages/clases/clases.component';
import { DTitulosDirective } from './Shared/Directivas/d-titulos.directive';
import { PNombrePipe } from './Shared/Pipes/p-nombre.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MMaterialModule } from './Core/Modulos/m-material/m-material.module';
import { DialogStudiantesComponent } from './Pages/componentes/dialog-studiantes/dialog-studiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenidoComponent,
    NavBarComponent,
    AlumnosComponent,
    CursosComponent,
    ClasesComponent,
    DTitulosDirective,
    PNombrePipe,
    DialogStudiantesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
