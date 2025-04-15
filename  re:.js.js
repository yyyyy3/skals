let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255, 100);
}

function draw() {
  background(0, 10);
  for (let i = 0; i < 100; i++) {
    let x = noise(t + i) * width;
    let y = noise(t + i + 1000) * height;
    ellipse(x, y, 10, 10);
  }
  t += 0.01;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
