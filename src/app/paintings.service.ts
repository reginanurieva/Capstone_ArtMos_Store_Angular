// import { Injectable } from '@angular/core';
// import { Painting } from './paintings.model';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// @Injectable()
// export class PaintingsService {
//   albums: FirebaseListObservable<any[]>;

//   constructor(private database: AngularFireDatabase) {
//     this.paintings = database.list('albums');
//   }

//   getPaintings() {
//     return this.paintings;
//   }

//   addPainting(newPainting: Painting) {
//     this.paintings.push(newPainting);
//   }

//   getAlbumById(albumId: string){
//     return this.database.object('albums/' + albumId);
//   }

//   updateAlbum(localUpdatedAlbum){
//     var albumEntryInFirebase = this.getAlbumById(localUpdatedAlbum.$key);
//     albumEntryInFirebase.update({title: localUpdatedAlbum.title,
//                                 artist: localUpdatedAlbum.artist,
//                                 description: localUpdatedAlbum.description});
//   }

//   deleteAlbum(localAlbumToDelete){
//     var albumEntryInFirebase = this.getAlbumById(localAlbumToDelete.$key);
//     albumEntryInFirebase.remove();
//   }

// }