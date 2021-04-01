class Sand{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = 
	{
		restitution:0.6,
		density:1.0,
		friction:1.0
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
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
			strokeWeight(2);
			stroke("black");
			fill("fuchsia");
			
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r);
			pop();
	}

}