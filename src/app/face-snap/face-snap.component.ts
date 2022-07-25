import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  ngOnInit(): void {
     this.buttonText = 'Ajouter like';
  }
  onLike() {
    if (this.buttonText === 'Ajouter like') {
      this.faceSnap.likes++;
      this.buttonText = 'Supprimer like';
    } else {
      this.faceSnap.likes--;
      this.buttonText = 'Ajouter like';
    }
  }
}
