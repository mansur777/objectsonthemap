import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { GeoDataService } from '../geo-data.service';
import { GeoData } from '../geodata';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {

  private map;
  public geopoints: GeoData[] = [];
  private markerArray = [];

  constructor(private GeoDataService: GeoDataService) { }

ngOnInit() {
    //this.getData();
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.getData();
  }

  private initMap():void {
    this.map = L.map('map', {
      center: [ 0, 0 ],
      zoom: 0,
    });
    
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom:18,
      minZoom:3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private getData() {
    //console.log('getData()...');
    this.GeoDataService.getGeoData()
    .subscribe(res => {
      //console.log('this.geopoints: ', res);
      this.geopoints = res;
      res.forEach(r => {
        this.markerArray.push(L.marker([r.latitude, r.longitude]));
      });
      let group = L.featureGroup(this.markerArray).addTo(this.map);
      this.map.fitBounds(group.getBounds());  
    });
  };

  private centerMap(lat: number, lng: number) {
    let latlng = L.latLng(lat, lng);
    this.map.setView(latlng, 10);
  }

}
