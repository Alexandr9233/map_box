import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ViewOfMapI } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public mapboxStyles = [
    {name: 'Mapbox Streets', url: 'mapbox://styles/mapbox/streets-v12'},
    {name: 'Mapbox Outdoors', url: 'mapbox://styles/mapbox/outdoors-v12'},
    {name: 'Mapbox Light', url: 'mapbox://styles/mapbox/light-v11'},
    {name: 'Mapbox Dark', url: 'mapbox://styles/mapbox/dark-v11'},
    {name: 'Mapbox Satellite', url: 'mapbox://styles/mapbox/satellite-v9'},
    {name: 'Mapbox Satellite Streets', url: 'mapbox://styles/mapbox/satellite-streets-v12'},
    {name: 'Mapbox Navigation Day', url: 'mapbox://styles/mapbox/navigation-day-v1'},
    {name: 'Mapbox Navigation Night', url: 'mapbox://styles/mapbox/navigation-night-v1'},
  ];

  public isListOfMaps: boolean = false;
  public mapsViewBtnTitle: string = 'Show views of maps';

  constructor(private dataService: DataService){}

  public onClickMapsViewBtn() {
    this.isListOfMaps = !this.isListOfMaps;
    this.mapsViewBtnTitle = this.isListOfMaps ? 'Cancel' : 'Show views of maps';
  }

  public onChangeView(view: ViewOfMapI) {
    this.dataService.viewOfMap.next(view);
  }
 }
