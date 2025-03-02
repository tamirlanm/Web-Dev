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
  newAlbum: Album = { userId: 1, id: 0, title: '' };
  showAddForm = false;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums().subscribe(
      (data) => {
        this.albums = data;
      },
      (error) => {
        console.error('Error fetching albums:', error);
      }
    );
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(
      () => {
        // Update the UI by removing the deleted album
        this.albums = this.albums.filter(album => album.id !== id);
        alert('Album deleted successfully!');
      },
      (error) => {
        console.error('Error deleting album:', error);
      }
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
    this.newAlbum = { userId: 1, id: 0, title: '' };
  }

  createAlbum(): void {
    if (!this.newAlbum.title.trim()) {
      alert('Album title cannot be empty!');
      return;
    }

    this.albumsService.createAlbum(this.newAlbum).subscribe(
      (createdAlbum) => {
        // Add the new album to the list
        this.albums.unshift(createdAlbum);
        this.toggleAddForm();
        alert('Album created successfully!');
      },
      (error) => {
        console.error('Error creating album:', error);
      }
    );
  }
}