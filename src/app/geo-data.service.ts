import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {GeoData} from './geodata';

@Injectable({
  providedIn: 'root'
})
export class GeoDataService {

  private geoDataUrl = 'https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json';

  constructor(
    private http: HttpClient
  ) { }


  getGeoData() {
    return this.http.get<GeoData[]>(this.geoDataUrl)
    .pipe(
      tap(_ => console.log('fetched geoData')),
      //catchError(this.handleError<GeoData>('getGeoData', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}


