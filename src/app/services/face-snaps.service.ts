import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";

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

  // Fait avec observable de haut niveau pour l'exemple, dans la réalité on ferait ça sur le serveur avec une route spécifique
  likeFaceSnapById(faceSnapId: number, likeType: 'like' | 'unlike'): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        likes: faceSnap.likes + (likeType === 'like' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
        `http://localhost:3000/facesnaps/${faceSnapId}`,
        updatedFaceSnap)
      )
    );
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
