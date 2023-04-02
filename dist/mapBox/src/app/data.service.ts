import { Injectable } from '@angular/core';
import { GeoDataItemModelI, GeoDataModelI, ViewOfMapI } from "./models";
import { Subject } from "rxjs";
import { ElementRef } from '@angular/core';
import * as data from '../assets/road_accidents.geo.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private allPoints!: GeoDataModelI;
  private filtersList: string[] = [];
  public accidentsList: string[] = [];

  public initAccidentsData = new Subject<GeoDataModelI>();
  public accidentsData = new Subject<GeoDataModelI>();
  public viewOfMap: Subject<ViewOfMapI> = new Subject<ViewOfMapI>();

  constructor() { }

  public getGeoData(): void {
    this.allPoints = data as GeoDataModelI;
    this.getAccidentsList();
    this.initAccidentsData.next(this.allPoints);
  }

  public changeFilters(el: ElementRef): void {
    const filterIsChecked = el.nativeElement.checked;
    const filterValue = el.nativeElement.id;
    if (filterIsChecked) {
      this.filtersList.push(filterValue);
    } else {
      this.filtersList = this.filtersList.filter((filter: string) => filter !== filterValue);
    }
    this.checkFiltersListLength();
  }

  private getAccidentsList(): void {
    const accidentsList: Set<string> = new Set();
    this.allPoints.features.forEach((feature: GeoDataItemModelI) => {
      accidentsList.add(feature.properties.type);
    });
    this.accidentsList = [...accidentsList];
  }

  private checkFiltersListLength(): void {
    if (this.filtersList.length === 0) {
      this.accidentsData.next(this.allPoints);
    } else {
      this.filterAccidentsData();
    }
  }

  private filterAccidentsData(): void {
    let filteredData: GeoDataItemModelI[] = [];
    this.filtersList.forEach((filter: string) => {
      const filtered = this.allPoints.features.filter((x: GeoDataItemModelI) => x.properties.type === filter);
      filteredData = filteredData.concat(filtered);
    })
    const filteredFeatureCollection = {
      type: "FeatureCollection",
      features: filteredData,
    };
    this.accidentsData.next(filteredFeatureCollection as GeoDataModelI);
  }

}
