import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sort-cars',
  templateUrl: './sort-cars.component.html',
  styleUrls: ['./sort-cars.component.css']
})
export class SortCarsComponent implements OnInit {
  sortOptions: any = [];
  initialVal: any;
  @Output() appliedSort = new EventEmitter<void>();
  constructor(public dialogRef: MatDialogRef<SortCarsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.sortOptions = this.data;
  }

  radioChange(event: any) {
    console.log(event.value);
    let index = this.sortOptions.findIndex((o: any) => o.name == event.value);
    for (let sortIndex = 0; sortIndex < this.sortOptions.length; sortIndex++) {
      this.sortOptions[sortIndex].checked = false;      
    }
    this.sortOptions[index].checked = true;
    this.dialogRef.close([event.value, this.sortOptions]);
  }

}
