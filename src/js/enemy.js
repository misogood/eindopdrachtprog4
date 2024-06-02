import { Actor, CollisionType, Input, SpriteSheet, Vector, range, Animation,Timer } from "excalibur";
import { Resources } from './resources';
import { Player } from './player';
import { Game } from "./game";



export class Enemy extends Actor {
  constructor(x, y, speed) {
    super({
      width: Resources.Enemy.width / 2,
      height: Resources.Enemy.height / 2,
      pos: new Vector(900, 460),
      vel: new Vector(-speed-250, 0)
    });
  }

  /**
   * @param {Game} engine 
   */
  onInitialize(engine) {
    this.body.collisionType = CollisionType.Active
    this.graphics.use(Resources.Enemy.toSprite())

    
    this.body.useGravity = false;

    const delay = 60 * 1000; 
    const timer = new Timer({
      interval: delay,
      fcn: () => {
        const enemy2 = new Enemy(800, 300, 5); 
        engine.currentScene.add(enemy2); 
        timer.stop(); 
      },
      repeats: false 
    });
    engine.add(timer); 
    timer.start(); 


    
  }





}









