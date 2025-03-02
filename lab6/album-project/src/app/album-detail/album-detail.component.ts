// album-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { Album } from '../album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(album => {
      this.album = album;
      this.editTitle = album.title;
    });
  }

  saveTitle(): void {
    if (this.album && this.editTitle.trim()) {
      const updatedAlbum: Album = {
        ...this.album,
        title: this.editTitle
      };
      
      this.albumsService.updateAlbum(updatedAlbum).subscribe(album => {
        this.album = album;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  goToPhotos(): void {
    if (this.album) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }
}