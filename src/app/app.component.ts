import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  secondSnap!: FaceSnap;
  lastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Ripley',
      'Mon pseudo depuis toujours',
      new Date(),
      0,
      'https://figurinesalien.files.wordpress.com/2017/11/paul-jackson-alien-banana.jpg'
    )
    this.secondSnap = new FaceSnap(
      'Bezedache',
      'Mon deuxième pseudo',
      new Date(),
      2,
      'https://logodix.com/logo/83317.png'
    )
    this.lastSnap = new FaceSnap(
      'Morz',
      'Mon premier pseudo',
      new Date(),
      0,
      'https://lemagdesanimaux.ouest-france.fr/images/dossiers/2020-06/mini/morse-095329-650-400.jpg'
    )
  }
}
