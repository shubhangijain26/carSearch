import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarsDataService } from '../cars-data.service';
import { SortCarsComponent } from '../sort-cars/sort-cars.component';

@Component({
  selector: 'app-cars-result',
  templateUrl: './cars-result.component.html',
  styleUrls: ['./cars-result.component.css']
})
export class CarsResultComponent implements OnInit {
  sortOptions: any = [];

  
  @Input() carsData: any;
  @Input() searchData: any;
  constructor(
    public carsService: CarsDataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    let data = this.carsService.getAllCarsData().carMockItineraries.CarItineraries;
    this.carsData = data;
    this.sortOptions = [
      { name: "Price:lowest" },
      { name: "Price:highest" },
      { name: "Rental company:A to Z" },
      { name: "Rental company:Z to A" },
      { name: "Car Type:A to Z" },
      { name: "Car Type:Z to A" }
    ];

    // this.carsData = this.carsService.getAllCarsData();
    // this.carsDetails = this.carsData.carMockItineraries.CarItineraries;
  }

  applySort() {
    const dialogRef = this.dialog.open(SortCarsComponent,
      {
        data: this.sortOptions, 
        panelClass: 'fullscreen-dialog',
        height: '100vh',
        width: '100%'
      });

    dialogRef.afterClosed().subscribe(result => {
      this.sortCars(result[0]);
      
    });
  }

  sortCars(sortVal: any) {
    console.log(sortVal);
    let values = sortVal.split(":");
    this.carsData.sort((a: any, b: any) => {
      let sort = 1;
      if(values[0] == "Price" && values[1] == "lowest")
      {       
        sort = a.fare.totalAmount > b.fare.totalAmount ? 1 : -1;
      }
      else if(values[0] == "Price" && values[1] == "highest")
      {       
        sort = a.fare.totalAmount < b.fare.totalAmount ? 1 : -1;
      }

      else if(values[0] == "Rental company" && values[1] == "A to Z")
      {       
        sort = a.vehicle.name > b.vehicle.name  ? 1 : -1;
      }
      else if(values[0] == "Rental company" && values[1] == "Z to A")
      {       
        sort = a.vehicle.name  < b.vehicle.name  ? 1 : -1;
      }

      else if(values[0] == "Car Type" && values[1] == "A to Z")
      {       
        sort = a.vehicle.type > b.vehicle.type ? 1 : -1;
      }
      else if(values[0] == "Car Type" && values[1] == "Z to A")
      {       
        sort = a.vehicle.type < b.vehicle.type ? 1 : -1;
      }      
      
      return sort;
      
    });
  }



}
