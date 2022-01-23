import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
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