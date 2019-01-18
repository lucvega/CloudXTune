import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  public getAlbum(collectionId: string) {
    return this.http.get(environment.apiUrl + 'lookup?id=' + collectionId + '&entity=song');
  }
}