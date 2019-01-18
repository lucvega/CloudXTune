import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  
  artistId: string;
  albums: string[];
  filter: string = 'album';
  searchKey: string;

  constructor(public router: Router,
    private artistService: ArtistService,
    private route: ActivatedRoute) { }


  getAlbum() {
    this.artistService.getAlbums(this.artistId).subscribe((res: any) => {
      if (res) {
        this.albums = res._body.results.slice(1);
        this.searchKey = res._body.results[0].artistName;
      }
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let param = params.get("artistId");
      if (param) {
        this.artistId = param;
        this.getAlbum();
      } else {
        this.artistId = null;
      }
    })
  }

}
