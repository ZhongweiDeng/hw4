function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {

  for (var x = random(width);  x < width; x = x + 1) {
  stroke(x, random(height), 100);
  point(x, random(height));
}
}
