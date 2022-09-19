import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
