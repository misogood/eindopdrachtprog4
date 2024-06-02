import { Label, Vector, Color } from 'excalibur';

export let score = 0;
let scoreLabel;

export function initializeScoreLabel(engine) {
  scoreLabel = new Label({
    text: `Score: ${score}`,
    pos: new Vector(10, 10),
    fontSize: 20,
    color: Color.White,
  });
  engine.add(scoreLabel);
}

export function increaseScore(points) {
  score += points;
  updateScoreLabel();
}

export function resetScore() {
  score = 0;
  updateScoreLabel();
}

function updateScoreLabel() {
  if (scoreLabel) {
    scoreLabel.text = `Score: ${score.toFixed(0)}`;
  }
}


const style = document.createElement('style');
style.innerHTML = `
.score-label {
  position: absolute;
  top: 10px;
  left: 10px;
}
`;
document.head.appendChild(style);

// Verhoog de score elke 5 seconden met 100
setInterval(() => {
  increaseScore(100);
}, 5000);
