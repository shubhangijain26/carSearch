import { Injectable } from '@angular/core';
import * as carsData from '../assets/carMockItineraries.json';

@Injectable({
  providedIn: 'root'
})
export class CarsDataService {

  constructor() { }

  getAllCarsData() {
    return carsData;
  }
}
