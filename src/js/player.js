import { Actor, CollisionType, Input, Vector } from "excalibur";
import { Resources } from './resources';
import { resetScore } from './score';
import { Coffee } from "./coffee.js";
import { EndScreen } from './EndScreen.js';
import { Enemy } from './enemy.js';

export class Player extends Actor {
  constructor() {
    super({
      width: Resources.Player.width / 4,
      height: Resources.Player.height / 4,
      sprite: Resources.Player,
      collisionType: CollisionType.Passive
    });

    this.velY = 0; 
    this.jumpSpeed = -1000; 
    this.gravity = 2000; 

    this.coffeeCollisions = 0; 
  }

  onInitialize(engine) {
    this.pos = new Vector(100, 475);
    this.scale = new Vector(1.4, 1.4);
    this.body.collisionType = CollisionType.Active;
    this.body.useGravity = false;
    console.log(engine);
    this.graphics.use(Resources.Player.toSprite());


    this.engine = engine;

    this.on('collisionstart', (event) => {
      if (event.other instanceof Enemy) {
        console.log('Botst met een Enemy');
        this.handleEnemyCollision(event);
      } else if (event.other instanceof Coffee) {
        console.log('Botst met een Coffee');
        this.handleCoffeeCollision(event);
      }
    });
  }

  onPreUpdate(engine) {
    let xspeed = 0;
    let yspeed = 0;
    let kb = engine.input.keyboard;

    if (kb.isHeld(Input.Keys.W) || kb.isHeld(Input.Keys.Up)) {
      yspeed = -300;
    }
    if (kb.isHeld(Input.Keys.S) || kb.isHeld(Input.Keys.Down)) {
      yspeed = 300;
    }

    this.vel = new Vector(xspeed, yspeed);

    
    const screenWidth = this.engine.drawWidth;
    const screenHeight = this.engine.drawHeight;

    if (this.pos.x < 0) {
      this.pos.x = 0;
    }
    if (this.pos.x > screenWidth - this.width) {
      this.pos.x = screenWidth - this.width;
    }
    if (this.pos.y < 0) {
      this.pos.y = 0;
    }
    if (this.pos.y > screenHeight - this.height) {
      this.pos.y = screenHeight - this.height;
    }
  }

  handleEnemyCollision(event) {
    this.kill();
    this.engine.goToScene('Eindscherm');
  }

  handleCoffeeCollision(event) {
    this.coffeeCollisions += 1;
    console.log(`Coffee collisions: ${this.coffeeCollisions}`); 
    if (this.coffeeCollisions >= 2) {
      this.kill();
      this.engine.goToScene('Eindscherm');
    } else {
      console.log('Eerste botsing met een Coffee, speler wordt nog niet gedood.');
      
    }
  }
}
