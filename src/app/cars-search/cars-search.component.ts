import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { CarsDataService } from '../cars-data.service';
import { driver_age } from '../driver-age';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.css'],
})
export class CarsSearchComponent {
  startDate = new FormControl(new Date());
  dropOffStart : any;
  ageGroups: any = driver_age;
  formData: any;
  isSearchApplied : boolean = false;
  @Output()
dateChange: EventEmitter<MatDatepickerInputEvent<any>> = new EventEmitter();
  carsData: any;

    carForm = this.fb.group({
    location : ['', Validators.required],
    pickDate : ['', Validators.required],
    dropDate : ['', Validators.required],
    pickTime : ['', Validators.required],
    dropTime : ['', Validators.required],
    driverAge : ['', Validators.required],
  })

  constructor(protected fb: FormBuilder,     public carsService: CarsDataService
    ) {}

  searchCars() {
    if (this.carForm.valid) {
      console.log(this.carForm.value)
      this.formData = this.carForm.value;
      let data = this.carsService.getAllCarsData().carMockItineraries.CarItineraries;
      this.carsData = data;
      // this.carsData = data.filter((value)=>{
      //   if(value.)
      // });
      this.isSearchApplied = true;
   }
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
      this.dropOffStart = event.value;
      
  }
}
