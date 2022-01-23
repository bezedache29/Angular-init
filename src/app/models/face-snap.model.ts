// export class FaceSnap {

//   title: string;
//   description: string;
//   createdDate: Date;
//   snaps: number;
//   imgUrl: string;

//   constructor(title:string, description:string, createdDate:Date, snaps:number, imgUrl:string) {
//     this.title = title;
//     this.description = description;
//     this.createdDate = createdDate;
//     this.snaps = snaps;
//     this.imgUrl = imgUrl;
//   }
// }

// EQUIVALENT

// export class FaceSnap {

//   constructor(public title: string,
//               public description: string,
//               public createdDate: Date,
//               public snaps: number,
//               public imgUrl: string,
//               public location?: string) {
//   }
// }
export class FaceSnap {

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imgUrl!: string;
  location?: string;
  
}