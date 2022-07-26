import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import {interval, Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps!: FaceSnap[];

  // Obersavle permettant de gérer la fin de l'observable interval
  private destroy$!: Subject<boolean>

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit() : void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

    this.destroy$ = new Subject<boolean>();

    interval(1000).pipe(
      tap(console.log),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
