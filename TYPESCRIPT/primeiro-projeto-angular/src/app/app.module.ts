import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardAutomaticoComponent } from './card-automatico/card-automatico.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputRangeComponent } from './input-range/input-range.component';
import { InputFileComponent } from './input-file/input-file.component';

/* //importando o app Card component
import { CardComponent } from "./card/card.component" */

@NgModule({
  declarations: [
    AppComponent,
    CardAutomaticoComponent,
    InputTextComponent,
    InputDateComponent,
    InputRangeComponent,
    InputFileComponent, 
/*     //declarando e registrando no Angular
    CardComponent */
  ],
  imports: [
    BrowserModule
   
  ],
  providers: [],
  bootstrap: [AppComponent] //componente principal e apartir dele tudo começa
})
export class AppModule { }
