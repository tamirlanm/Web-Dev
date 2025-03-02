import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album, Photo } from '../album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  // Get all albums
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`);
  }

  // Get single album by id
  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  // Create new album
  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(`${this.baseUrl}/albums`, album);
  }

  // Update album
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }

  // Delete album
  deleteAlbum(id: number): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/albums/${id}`);
  }

  // Get photos of an album
  getAlbumPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${albumId}/photos`);
  }
}