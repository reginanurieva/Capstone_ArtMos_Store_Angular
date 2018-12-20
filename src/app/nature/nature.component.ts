import { Component, OnInit } from '@angular/core';
import { Painting } from '../paintings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent {

  constructor(private router: Router){}

  goToDetailPage(clickedPainting: Painting) {
    this.router.navigate(['painting', clickedPainting.id]);
  };

  paintings: Painting[] = [
    new Painting("Trees", "Andrei Mosanu",
        "190.00", '../../assets/natureImgs/nature1.JPG', 1),
    new Painting("Village life", "AM",
        "sold out", '../../assets/natureImgs/nature2.webp', 2),
    new Painting("Her", "Andrei Mosanu",
        "300.00.",'../../assets/natureImgs/nature6.webp', 3)
  ];

}
