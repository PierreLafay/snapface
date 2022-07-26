import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root' // enregistré à la racine de l'app, partagé entre les composants
})
export class FaceSnapsService {

  faceSnaps : FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      likes: 25,
      price: 10.5,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      likes: 15,
      price: 3250,
      location: 'La montagne'
    },
    {
      id: 3,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      likes: 0,
      price: 9.99
    }
  ];

  constructor(private http: HttpClient) {}

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceLikeById(faceSnapId: number, likeType: 'like' | 'unlike'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    likeType === 'like' ? faceSnap.likes++ : faceSnap.likes--;
  }
  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string, price?: number}) {
    const faceSnap: FaceSnap = {
      ...formValue,
      likes: 0,
      createdDate: new Date(),
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    };
    this.faceSnaps.push(faceSnap);
  }
}
