import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
     this.buttonText = 'Ajouter like';
  }
  onLike() {
    if (this.buttonText === 'Ajouter like') {
      this.faceSnapsService.snapFaceLikeById(this.faceSnap.id,'like');
      this.buttonText = 'Supprimer like';
    } else {
      this.faceSnapsService.snapFaceLikeById(this.faceSnap.id,'unlike');
      this.buttonText = 'Ajouter like';
    }
  }
}
