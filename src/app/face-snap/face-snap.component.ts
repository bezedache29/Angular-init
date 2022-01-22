import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Ripley';
    this.description = 'Mon pseudo depuis toujours';
    this.createdDate = new Date();
    this.snaps = 6;
  }

}
