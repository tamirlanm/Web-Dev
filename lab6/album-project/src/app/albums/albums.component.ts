// albums.component.ts
import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { Album } from '../album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  newAlbum: Partial<Album> = { userId: 1, title: '' };

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }

  createAlbum(): void {
    if (this.newAlbum.title?.trim()) {
      this.albumsService.createAlbum(this.newAlbum).subscribe(album => {
        this.albums.unshift(album);
        this.newAlbum.title = '';
      });
    }
  }
}