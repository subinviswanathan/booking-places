import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewOfferPageRoutingModule } from './new-offer-routing.module';

import { NewOfferPage } from './new-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewOfferPageRoutingModule
  ],
  declarations: [NewOfferPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class NewOfferPageModule { }
