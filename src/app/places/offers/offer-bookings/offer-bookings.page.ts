import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place: Place;

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private placeService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('placeId');
      if (!id) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      this.place = this.placeService.places.find(p => p.id === id);

      if (!this.place) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
    });
  }

}
