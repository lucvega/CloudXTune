import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';

const routes: Routes = [  
    { path: 'search', component: SearchComponent },
    { path: 'artist', component: ArtistComponent },
    { path: 'artist/:artistId', component: ArtistComponent },
    { path: 'album', component: AlbumComponent },
    { path: 'album/:collectionId', component: AlbumComponent },
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: '**', redirectTo: '/search', pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  
  export class AppRoutingModule {}