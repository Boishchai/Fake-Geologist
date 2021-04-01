class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = 
	{
		restitution:0.3,
		density:1.0,
		friction:5.0
	}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(400, 500, (this.r-20)/2, options);
		Matter.Body.setStatic(this.body, false);
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;	
			var angle = this.body.angle;	
			push();
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(RADIUS);
			rotate(angle);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r);
			pop();
	}

}