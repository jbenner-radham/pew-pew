import EventEmitter from './EventEmitter';
import GameObject from './GameObject';
import Messages from './Messages';
import playerImg from '../assets/player.png';

export default class Player extends GameObject {
  public speed: number;
  public img: HTMLImageElement;
  public leftPressed: boolean;
  public rightPressed: boolean;

  public constructor(x: number, y: number) {
    super(x, y);
    this.width = 99;
    this.height = 75;
    this.speed = 5;
    this.img = new Image(this.width, this.height);
    this.img.src = playerImg;
    this.leftPressed = false;
    this.rightPressed = false;

    const events = new EventEmitter();
    events.on(Messages.LEFT_KEY_DOWN_EVENT, () => this.leftPressed = true);
    events.on(Messages.LEFT_KEY_UP_EVENT, () => this.leftPressed = false);
    events.on(Messages.RIGHT_KEY_DOWN_EVENT, () => this.rightPressed = true);
    events.on(Messages.RIGHT_KEY_UP_EVENT, () => this.rightPressed = false);
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    // const x = this.leftPressed ? this.x -= this.speed : this.rightPressed ? this.x += this.speed : this.x;
    const x = (() => {
      if (this.leftPressed) return this.x -= this.speed;
      if (this.rightPressed) return this.x += this.speed;
      return this.x;
    })();
    const y = this.y;

    ctx.drawImage(this.img as unknown as CanvasImageSource, x, y);
  }
}
