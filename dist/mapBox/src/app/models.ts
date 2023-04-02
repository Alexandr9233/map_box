export interface GeoDataModelI {
  type: 'FeatureCollection',
  features: GeoDataItemModelI[],
}

export interface GeoDataItemModelI {
  geometry: {
    type: 'Point',
    coordinates: number[]
  }
  id: string,
  properties: {
    type: string,
    died: number,
    wounded: number
  }
  type: "Feature"
}

export interface ViewOfMapI {
  name: string,
  url: string
}
