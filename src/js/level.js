import { Actor, CollisionType, Engine, Label, Scene, Vector, Color } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import { Background } from './background.js';
import { Player } from './player.js';
import { initializeScoreLabel, increaseScore, resetScore } from './score.js';
import { Enemy } from './enemy.js';
import { Coffee} from './coffee.js';
import { Spawner } from './spawner.js'





export class Level extends Scene {
  
  constructor() {
      super();
  }


    onInitialize(){
    let spawn = new Spawner();
    this.add(spawn);    



    const background = new Background();
    this.add(background);
    
    let player = new Player();
    this.add(player);

    
   



    initializeScoreLabel(this);

        // Verhoog de score elke 5 seconden met 100
        setInterval(() => {
          increaseScore(100);
        }, 5000);

       
            
}








}