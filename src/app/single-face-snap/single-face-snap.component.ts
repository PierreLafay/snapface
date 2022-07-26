import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private  route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.buttonText = 'Ajouter like';
    // Récupération du facesnap par la route, le + est pour caster en number
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(snapId);
  }
  onLike(faceSnapId: number) {
    if (this.buttonText === 'Ajouter like') {
      this.faceSnap$ = this.faceSnapsService.likeFaceSnapById(faceSnapId, 'like').pipe(
        tap(() => this.buttonText = 'Supprimer like')
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.likeFaceSnapById(faceSnapId, 'unlike').pipe(
        tap(() => this.buttonText = 'Ajouter like')
      );
    }
  }
}
