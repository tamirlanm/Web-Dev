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
  editTitle = '';
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.getAlbumDetail();
  }

  getAlbumDetail(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(
      (data) => {
        this.album = data;
        this.editTitle = data.title;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching album details:', error);
        this.isLoading = false;
      }
    );
  }

  saveAlbum(): void {
    if (!this.album) return;
    if (!this.editTitle.trim()) {
      alert('Album title cannot be empty!');
      return;
    }

    const updatedAlbum: Album = {
      ...this.album,
      title: this.editTitle
    };

    this.albumsService.updateAlbum(updatedAlbum).subscribe(
      (data) => {
        this.album = data;
        alert('Album updated successfully!');
      },
      (error) => {
        console.error('Error updating album:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  goToPhotos(): void {
    if (!this.album) return;
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}