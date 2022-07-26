import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root' // enregistré à la racine de l'app, partagé entre les composants
})
export class FaceSnapsService {

  faceSnaps : FaceSnap[] = [];

  constructor(private http: HttpClient) {}

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  snapFaceLikeById(faceSnapId: number, likeType: 'like' | 'unlike'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    //likeType === 'like' ? faceSnap.likes++ : faceSnap.likes--;
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
