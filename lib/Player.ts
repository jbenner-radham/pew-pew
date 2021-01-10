import GameObject, { GameObjectTypes } from './GameObject';
import messageBus from '../services/message-bus';
import Messages from './Messages';
import playerImg from '../assets/player.png';

export default class Player extends GameObject {
  public speed: number;
  public leftPressed: boolean;
  public rightPressed: boolean;
  public upPressed: boolean;
  public downPressed: boolean;

  public constructor(x: number, y: number) {
    super(x, y);
    this.width = 99;
    this.height = 75;
    this.speed = 5;
    this.type = GameObjectTypes.Player;
    this.img = new Image(this.width, this.height);
    this.img.src = playerImg;
    this.leftPressed = false;
    this.rightPressed = false;
    this.upPressed = false;
    this.downPressed = false;

    messageBus.on(Messages.LEFT_KEY_DOWN_EVENT, () => this.leftPressed = true);
    messageBus.on(Messages.LEFT_KEY_UP_EVENT, () => this.leftPressed = false);
    messageBus.on(Messages.RIGHT_KEY_DOWN_EVENT, () => this.rightPressed = true);
    messageBus.on(Messages.RIGHT_KEY_UP_EVENT, () => this.rightPressed = false);
    messageBus.on(Messages.UP_KEY_DOWN_EVENT, () => this.upPressed = true);
    messageBus.on(Messages.UP_KEY_UP_EVENT, () => this.upPressed = false);
    messageBus.on(Messages.DOWN_KEY_DOWN_EVENT, () => this.downPressed = true);
    messageBus.on(Messages.DOWN_KEY_UP_EVENT, () => this.downPressed = false);
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    if (this.leftPressed) this.x -= this.speed;
    if (this.rightPressed) this.x += this.speed;
    if (this.upPressed) this.y -= this.speed;
    if (this.downPressed) this.y += this.speed;

    ctx.drawImage(this.img as unknown as CanvasImageSource, this.x, this.y, this.width, this.height);
  }
}