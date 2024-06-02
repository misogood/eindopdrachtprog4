
import { Actor, CollisionType, Engine, Label, Scene, Vector, Color, Random, Timer } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import { Background } from './background.js';
import { Player } from './player.js';
import { initializeScoreLabel, increaseScore, resetScore } from './score.js';
import { Enemy } from './enemy.js';

import { Level } from './level.js';
import { Coffee } from './coffee.js';



export class Spawner extends Actor {

  counter = 0

  constructor() {
    super();
    this.random = new Random(1337);
  }



  onInitialize(engine) {
    this.spawnEnemy(engine);
    this.enemyTimer = new Timer({
      fcn: () => this.spawnEnemy(engine),
      interval: 5000,
      repeats: true,
    });

    engine.currentScene.add(this.enemyTimer);

    this.enemyTimer.start();




    setTimeout(() => {
      this.spawnCoffee(engine);
      this.coffeeTimer = new Timer({
        fcn: () => this.spawnCoffee(engine),
        interval: 20000,
        repeats: true,
      });

      engine.currentScene.add(this.coffeeTimer);
      this.coffeeTimer.start();
    }, 3000);


  }

  onPreUpdate() {
    this.counter++;
  }

  spawnEnemy(engine) {
    console.log("Spawn");
    const enemy = new Enemy(
      this.random.integer(0, 800),
      this.random.integer(0, 600),
      this.counter / 2
    );
    engine.currentScene.add(enemy);
  }


  spawnCoffee(engine) {
    console.log("Spawn coffee");
    const coffee = new Coffee(
      this.random.integer(0, 800),
      this.random.integer(0, 600)
    );
    engine.currentScene.add(coffee);

  }


  




}
