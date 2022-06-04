var vertices = [];

function setup() {
  createCanvas(640, 360);
}

function mousePressed() {
  var v = createVector(mouseX, mouseY);
  vertices.push(v);
}

function draw() {
  background(51);

  var reached = [];
  var unreached = [];

  for (let i = 0; i < vertices.length; i++) {
    const v = vertices[i];
    unreached.push(v);
  }

  reached.push(unreached[0]);
  unreached.splice(0, 1);
  while (unreached.length > 0) {
    var record = 10000000;
    var rIndex;
    var unIndex;
    for (let i = 0; i < reached.length; i++) {
      const v1 = reached[i];
      for (let j = 0; j < unreached.length; j++) {
        const v2 = unreached[j];

        var d = dist(v1.x, v1.y, v2.x, v2.y);
        if (record > d) {
          record = d;
          rIndex = i;
          unIndex = j;
        }
      }
    }

    line(
      reached[rIndex].x,
      reached[rIndex].y,
      unreached[unIndex].x,
      unreached[unIndex].y);

    reached.push(unreached[unIndex]);
    unreached.splice(unIndex, 1);
  }

  for (let i = 0; i < vertices.length; i++) {
    const v = vertices[i];
    fill(255);
    stroke(255);
    ellipse(v.x, v.y, 6, 6)
  }
}
