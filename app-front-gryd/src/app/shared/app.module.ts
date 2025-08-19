import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MotivosComponent } from '../components/section/motivos/motivos.component';
import { SobreComponent } from '../components/section/motivos/pages/sobre/sobre.component';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MotivosComponent,
    SobreComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}