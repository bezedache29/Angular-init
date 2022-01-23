import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  constructor() { }

  ngOnInit(): void {
    this.faceSnaps = [
      {
        'title': 'Ripley',
        'description': 'Mon pseudo depuis toujours',
        'createdDate': new Date(),
        'snaps': 20,
        'imgUrl': 'https://figurinesalien.files.wordpress.com/2017/11/paul-jackson-alien-banana.jpg',
        'location': 'Nantes'
      },
      {
        'title': 'Bezedache',
        'description': 'Mon deuxième pseudo',
        'createdDate': new Date(),
        'snaps': 50,
        'imgUrl': 'https://logodix.com/logo/83317.png',
        'location': 'Kerlouan'
      },
      {
        'title': 'Morz',
        'description': 'Mon premier pseudo',
        'createdDate': new Date(),
        'snaps':35,
        'imgUrl': 'https://lemagdesanimaux.ouest-france.fr/images/dossiers/2020-06/mini/morse-095329-650-400.jpg'
      }
    ];
  }

}
