import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private  route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.buttonText = 'Ajouter like';
    // Récupération du facesnap par la route, le + est pour caster en number
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
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
