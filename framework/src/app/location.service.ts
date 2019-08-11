import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getLocation()
  {

    return ["Udupi", "Mangalore", "Manipal", "Gundibailu", "Korangrapady"];
  }
}
