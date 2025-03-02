// album-photos.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { Album, Photo } from '../album';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumPhotos(this.albumId).subscribe(photos => {
      this.photos = photos;
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}