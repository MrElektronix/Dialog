let canvas, context;
let game;
let img;



let Init = ()=> {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	game = new Game(700, 350, canvas, context);
	
	img = new Image();
	img.onload = ()=>{
		context.drawImage(img, 225, 25);
	}
	img.src = "images/mario.png";
	
	Update();
}



let Update = ()=> {
	requestAnimationFrame(Update);
}


Init();