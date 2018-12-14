import { Component, OnInit, OnDestroy} from '@angular/core';
declare function require(path: string);

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  // templateUrl: <style>{{carousel}}</style>
})
export class WelcomeComponent {

  img4 = require('../../assets/slide4.webp');
  img2 = require('../../assets/slide2.webp');
  img1 = require('../../assets/slide1.webp');

  arrImg = [this.img1, this.img2, this.img4];

  currentImg: any;


  styleVar: any;
  constructor(){
    this.carousel()
  }

// myIndex:number = 0;
//   carousel() {
//     var style = {display:'block'};
//       var i;
//       var x = document.getElementsByClassName("mySlides");
//       for (i = 0; i < x.length; i++) {
//         if (this.myIndex > x.length) {this.myIndex = 1}
//         {
//           setInterval(this.carousel, 2000); 
//           this.myIndex++;    
//           this.styleVar = {display: 'block'};
//         }
//       this.styleVar = {display: 'none'};
//       }
//   }

 carousel(){
   let count = 0;
   this.currentImg = this.arrImg[count];
     setInterval(() => {
      count++;
      if (count >= this.arrImg.length) {
        count = 0;
      }
      this.currentImg = this.arrImg[count];
    }, 5000);
 }
}

