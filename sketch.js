var draw_objects = []
var show_circle = false;
var last_x = 0;
var last_y = 0;


class myCircle {
  constructor(x, y, velocity_x, velocity_y, max_count) {
    this.x = x;
    this.y = y;
    this.radius = 20;
    this.count = 0;
    this.max_count = max_count;
    this.velocity_x = velocity_x;
    this.velocity_y = velocity_y;
    this.velocity_factor = 0.1;
  }

  update() {
    this.count += 1;
  }

  draw() {
    push();
    fill(255, 0, 0,(255 - 255 * this.count / this.max_count));
    stroke(0, 0, 0,(255 - 255 * this.count / this.max_count));
    ellipse(this.x + this.velocity_x * this.count * this.velocity_factor, this.y +  this.velocity_y * this.count * this.velocity_factor, this.radius, this.radius);
    pop();
  }
}


function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);

  draw_objects = draw_objects.reduce((p, c) => ((c.count < c.max_count) && p.push(c), p), []);
  
  for (const draw_object of draw_objects) {
    draw_object.update();
    draw_object.draw();
  }

  if (show_circle) {
    // ellipse(mouseX, mouseY, 50, 50);
    draw_objects.push(new myCircle(mouseX, mouseY, mouseX - last_x,  mouseY - last_y, 100));
  }

  last_x = mouseX;
  last_y = mouseY;

}

function mouseReleased() {
  show_circle = !show_circle;
  // ellipse(mouseX, mouseY, 50, 50);
}
