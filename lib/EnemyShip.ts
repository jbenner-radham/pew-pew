import GameObject, { GameObjectTypes } from './GameObject';
import enemyShipImg from '../assets/enemy-ship.png';

export default class EnemyShip extends GameObject {
    public speed: number;

    public constructor(x: number, y: number) {
        super(x, y);
        this.width = 98;
        this.height = 50;
        this.speed = 5;
        this.type = GameObjectTypes.EnemyShip;
        this.img = new Image(this.width, this.height);
        this.img.src = enemyShipImg;
    }
}