import GameObject from './GameObject';
import playerImg from '../assets/player.png';

export default class Player extends GameObject {
  public img: HTMLImageElement;
  public leftPressed: boolean;
  public rightPressed: boolean;

  public constructor(x: number, y: number) {
    super(x, y);
    this.width = 99;
    this.height = 75
    this.img = new Image(this.width, this.height);
    this.img.src = playerImg;
    this.leftPressed = false;
    this.rightPressed = false;
  }
}
