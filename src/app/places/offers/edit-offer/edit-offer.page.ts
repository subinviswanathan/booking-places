import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place: Place;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placeService: PlacesService) { }

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
