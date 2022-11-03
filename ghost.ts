class Ghost {
    static speed = 2;
    position;
    radius: any;
    scared: boolean;
    prevCollisions: any;
    velocity: any;
    color: string;
    speed: number;
    constructor({position, velocity, color = 'red'}) {
        this.position = position;
        this.velocity = velocity;
        this.radius = GHOST_RADIUS;
        this.color = color;
        this.speed = GHOST_SPEED;
        this.prevCollisions = [];
        this.scared = false;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.scared ? 'blue' : this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}