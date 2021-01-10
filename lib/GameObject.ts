import Edges from '../interfaces/Edges';

export enum GameObjectTypes {
  Player,
  EnemyShip
}

export default class GameObject {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public img?: HTMLImageElement;
  public type: GameObjectTypes | '';

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.width = 0;
    this.height = 0;
    this.img = undefined;
    this.type = '';
  }

  public get edges(): Edges {
    return {
      top: this.y,
      left: this.x,
      bottom: this.y + this.height,
      right: this.x + this.width
    };
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img as unknown as CanvasImageSource, this.x, this.y, this.width, this.height);
  }

  public intersectsWith(gameObject: GameObject): boolean {
    return !(
      gameObject.edges.left > this.edges.right ||
      gameObject.edges.right < this.edges.left ||
      gameObject.edges.top > this.edges.bottom ||
      gameObject.edges.bottom < this.edges.top
    );
  }
}
