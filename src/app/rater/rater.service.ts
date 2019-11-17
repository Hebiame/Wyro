import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PictureModel} from '../shared/_models/picture.model';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaterService {

  constructor(private http: HttpClient) {}

  getImages(queryParams: object): Observable<PictureModel[]> {
    return this.http.get<PictureModel[]>('pictures', {params: {...queryParams}, observe: 'response'})
      .pipe(
        map(response =>
          response.body.map(picture => new PictureModel().deserialize(picture))
        )
      );
  }

  sendUserChoice(queryParams: object) {
    return this.http.post('pictures', queryParams);
  }
}
