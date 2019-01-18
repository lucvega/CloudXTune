import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  collectionId: string;
  songs: string[];
  albumDescription: string[];

  constructor(public router: Router,
    private albumService: AlbumService,
    private route: ActivatedRoute) { }

  getAlbum() {
    this.albumService.getAlbum(this.collectionId).subscribe((res: any) => {
      if (res) {
        console.log(res);
        this.albumDescription = res.results[0];
        this.songs = res.results.slice(1);
      }
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let param = params.get("collectionId");
      if (param) {
        this.collectionId = param;
        this.getAlbum();
      } else {
        this.collectionId = null;
      }
    })
  }

}
