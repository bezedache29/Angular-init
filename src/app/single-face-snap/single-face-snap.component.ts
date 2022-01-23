import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  isSnap!: boolean;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // ATTENTION les paramètres sont des strings !!!
    // Rajouter un + devant les paramètres récupéré, modifie la valeur string en number
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onToggleSnap() {
    if (this.isSnap) {
      this.isSnap = false;
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    } else {
      this.isSnap = true;
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    }
  }

}
