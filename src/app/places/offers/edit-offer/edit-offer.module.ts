import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditOfferPageRoutingModule } from './edit-offer-routing.module';

import { EditOfferPage } from './edit-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditOfferPageRoutingModule
  ],
  declarations: [EditOfferPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class EditOfferPageModule { }
