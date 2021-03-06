import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placeService: PlacesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('placeId');

      if (!id) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }

      this.place = this.placeService.places.find(p => p.id === id);

      if (!this.place) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
    });
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    this.navCtrl.navigateBack('/places/tabs/discover');
    // this.navCtrl.pop();
  }

}
