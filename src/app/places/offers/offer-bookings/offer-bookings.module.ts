import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferBookingsPageRoutingModule } from './offer-bookings-routing.module';

import { OfferBookingsPage } from './offer-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferBookingsPageRoutingModule
  ],
  declarations: [OfferBookingsPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class OfferBookingsPageModule { }
