import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './body/body.component';
import { InformationComponent } from './information/information.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio'; 
@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    BodyComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,FormsModule, BrowserAnimationsModule, MatSliderModule, MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
