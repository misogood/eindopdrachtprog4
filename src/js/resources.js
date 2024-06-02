import { ImageSource, Sound, Resource, Loader } from "excalibur";
import playerImage from "../images/dino.png";
import backgroundImage from "../images/background.png";
import enemyImage from "../images/enemy.png";
import StartbuttonImage from "../images/Startbutton.png"
import GameOverImage from "../images/GameOver.png";
import coffeeImage from '../images/coffee.png';
import splashImage from '../images/splash.png';

const Resources = {
  Player: new ImageSource(playerImage),
  Background: new ImageSource(backgroundImage),
  Enemy: new ImageSource(enemyImage),
  StartButton : new ImageSource (StartbuttonImage),
  GameOver: new ImageSource(GameOverImage),
  Coffee: new ImageSource(coffeeImage),
  Splash: new ImageSource (splashImage),
};

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)


export { Resources, ResourceLoader };


