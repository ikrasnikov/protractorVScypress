import { Component } from '@angular/core';

@Component({
  selector: 'app-deep-component',
  templateUrl: './deep-component.component.html',
  styleUrls: ['./deep-component.component.css']
})
export class DeepComponentComponent {

  public imageSource = '';
  public user = {
    firstName: '',
    lastName: ''
  };


  private imageCounter;
  private imagesPath = [
    '../../assets/one.svg',
    '../../assets/two.png',
    '../../assets/three.png',
    '../../assets/four.png',
    '../../assets/five.png',
  ];

  public nextPicture() {
    if (!this.imageCounter && this.imageCounter !== 0 || this.imageCounter === 4) {
      this.imageCounter = 0;
      this.imageSource = this.imagesPath[this.imageCounter];

      return;
    }

    this.imageCounter = this.imageCounter + 1;
    this.imageSource = this.imagesPath[this.imageCounter];
  }

  public submit(firstName, lastName) {
    this.user.firstName = firstName;
    this.user.lastName = lastName;
  }
}
