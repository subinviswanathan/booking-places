import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesPageRoutingModule } from './places-routing.module';

import { PlacesPage } from './places.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesPageRoutingModule
  ],
  declarations: [PlacesPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PlacesPageModule { }
