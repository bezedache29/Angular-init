import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  // title!: string;
  // description!: string;
  // createdDate!: Date;
  // snaps!: number;
  // imgUrl!: string;
  isSnap!: boolean;

  constructor() { }

  ngOnInit(): void {
    // this.title = 'Ripley';
    // this.description = 'Mon pseudo depuis toujours';
    // this.createdDate = new Date();
    // this.snaps = 6;
    // this.imgUrl = 'https://figurinesalien.files.wordpress.com/2017/11/paul-jackson-alien-banana.jpg';
    // this.isSnap = false;
  }

  onToggleSnap() {
    if (this.isSnap) {
      this.isSnap = false;
      this.faceSnap.snaps--;
    } else {
      this.isSnap = true;
      this.faceSnap.snaps++;
    }
  }

}
