import { ChangeDetectorRef, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  @ViewChildren('typeOfAccidentCheckbox') typeOfAccidentCheckbox: QueryList<ElementRef>;

  constructor(public dataService: DataService) { }

  public filterIsClicked(index: number): void{
    this.dataService.changeFilters(this.typeOfAccidentCheckbox.toArray()[index]);
  }

}
