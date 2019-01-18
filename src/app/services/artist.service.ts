import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Jsonp } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private jsonp: Jsonp) { }

  public getAlbums(artistId: string) {
    return this.jsonp.request(environment.apiUrl + 'lookup?id=' + artistId + '&entity=album&callback=JSONP_CALLBACK');
  }
}