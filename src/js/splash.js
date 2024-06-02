import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";



export class Splash extends Actor{
    constructor(){
        super({
            width: 100,
            height: 120,
            name: 'Splash',
            collisionType: CollisionType.Fixed 


        })
    }

    onInitialize(engine){
        this.sprite = Resources.Splash.toSprite()
        this.graphics.use(this.sprite)
        this.pos.y= 178
    }
}