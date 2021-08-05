import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Bangalore',
      'Silicon Valley of India',
      'https://upload.wikimedia.org/wikipedia/commons/2/23/UB_City_at_night_.jpg',
      200
    ),
    new Place(
      'p2',
      'Bangalore',
      'Silicon Valley of India',
      'https://upload.wikimedia.org/wikipedia/commons/2/23/UB_City_at_night_.jpg',
      100
    ),
    new Place(
      'p3',
      'Bangalore',
      'Silicon Valley of India',
      'https://upload.wikimedia.org/wikipedia/commons/2/23/UB_City_at_night_.jpg',
      300
    )
  ];

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }

  constructor() { }
}
