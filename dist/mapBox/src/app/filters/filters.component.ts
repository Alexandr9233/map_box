import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit{

  @ViewChildren('typeOfAccidentCheckbox') typeOfAccidentCheckbox: QueryList<ElementRef>;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.viewOfMap.subscribe(() => {
      this.typeOfAccidentCheckbox.toArray().forEach(el => {
        el.nativeElement.checked = false
      })
    })
  }

  public filterIsClicked(index: number): void {
    this.dataService.changeFilters(this.typeOfAccidentCheckbox.toArray()[index]);
  }

}
