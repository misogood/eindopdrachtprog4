import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";
import { Splash } from "./splash";

export class Coffee extends Actor {
  constructor(x, y) {
    super({
      width: 100,
      height: Resources.Coffee.height,
    });
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Coffee.toSprite());
    this.pos = new Vector(900, 60);
    this.scale = new Vector(0.5, 0.5);
    this.vel = new Vector(-250, 0);
    this.body.useGravity = false;
    this.body.collisionType = CollisionType.Active;

    let splash = new Splash();
    this.addChild(splash)
    splash.scale= new Vector(.5,.5)

    
  }
}
