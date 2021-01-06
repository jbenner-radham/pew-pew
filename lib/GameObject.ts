import Edges from '../interfaces/Edges';

export enum GameObjectTypes {
  Player,
  Enemy
}

export default class GameObject {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public type: GameObjectTypes | '';

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.width = 0;
    this.height = 0;
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

  public intersectsWith(gameObject: GameObject): boolean {
    return !(
      gameObject.edges.left > this.edges.right ||
      gameObject.edges.right < this.edges.left ||
      gameObject.edges.top > this.edges.bottom ||
      gameObject.edges.bottom < this.edges.top
    );
  }
}
