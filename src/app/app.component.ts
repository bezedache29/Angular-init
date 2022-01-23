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
    this.mySnap = {
      'title': 'Ripley',
      'description': 'Mon pseudo depuis toujours',
      'createdDate': new Date(),
      'snaps': 0,
      'imgUrl': 'https://figurinesalien.files.wordpress.com/2017/11/paul-jackson-alien-banana.jpg',
      'location': 'Nantes'
    }
    this.secondSnap = {
      'title': 'Bezedache',
      'description': 'Mon deuxième pseudo',
      'createdDate': new Date(),
      'snaps': 2,
      'imgUrl': 'https://logodix.com/logo/83317.png',
      'location': 'Kerlouan'
    }
    this.lastSnap = {
      'title': 'Morz',
      'description': 'Mon premier pseudo',
      'createdDate': new Date(),
      'snaps':0,
      'imgUrl': 'https://lemagdesanimaux.ouest-france.fr/images/dossiers/2020-06/mini/morse-095329-650-400.jpg'
    }
  }
}
