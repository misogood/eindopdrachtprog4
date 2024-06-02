import { Engine, Color, Physics, Vector} from "excalibur";
import { Level } from "./level.js";
import { ResourceLoader, Resources } from "./resources";
import { StartScreen } from "./startscreen";
import { EndScreen } from './EndScreen.js';



export class Game extends Engine{
    constructor() {
        super({ 
            backgroundColor: Color.ExcaliburBlue,
            width: 800,
            height: 600
        });
        this.start(ResourceLoader).then(() => this.startGame());

        Physics.useArcadePhysics();
        Physics.gravity = new Vector(0, 900);
        
    }

    startGame(){
        this.addScene('Startscherm',new StartScreen())
        this.addScene('Level',new Level());
        this.goToScene('Startscherm')
        this.addScene('Eindscherm', new EndScreen())
        Resources.music.volume= 1;
        Resources.music.loop=true;
        Resources.music.play();
    
            
    }
}

new Game()
