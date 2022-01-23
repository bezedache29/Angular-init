import { Injectable } from "@angular/core";
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      'id': 1,
      'title': 'Ripley',
      'description': 'Mon pseudo depuis toujours',
      'createdDate': new Date(),
      'snaps': 20,
      'imgUrl': 'https://figurinesalien.files.wordpress.com/2017/11/paul-jackson-alien-banana.jpg',
      'location': 'Nantes'
    },
    {
      'id': 2,
      'title': 'Bezedache',
      'description': 'Mon deuxième pseudo',
      'createdDate': new Date(),
      'snaps': 50,
      'imgUrl': 'https://logodix.com/logo/83317.png',
      'location': 'Kerlouan'
    },
    {
      'id': 3,
      'title': 'Morz',
      'description': 'Mon premier pseudo',
      'createdDate': new Date(),
      'snaps':35,
      'imgUrl': 'https://lemagdesanimaux.ouest-france.fr/images/dossiers/2020-06/mini/morse-095329-650-400.jpg'
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps++;
  }

  // snapFaceSnapById(faceSnapId: number): void {
  //   const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
  //   if (faceSnap) {
  //     faceSnap.snaps++;
  //   } else {
  //     throw new Error('FaceSnap not found');
  //   }
  // }

  // unSnapFaceSnapById(faceSnapId: number): void {
  //   const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
  //   if (faceSnap) {
  //     faceSnap.snaps--;
  //   } else {
  //     throw new Error('FaceSnap not found');
  //   }
  // }
}