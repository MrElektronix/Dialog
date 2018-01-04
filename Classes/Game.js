class Game {
	constructor(sceneWidth, sceneHeight, canvas, context) {
		this.sceneWidth = sceneWidth;
		this.sceneHeight = sceneHeight;
		this.canvas = canvas;
		this.context = context;
		
		
		this.dialogue;
		
		this.questiontext;
		this.answerbutton1;
		this.answerbutton2;
		this.answerbutton3;
		
		
		this.start();
	}

	start() {
		this.canvas.width = this.sceneWidth;
		this.canvas.height = this.sceneHeight;
		
		
		this.questiontext = document.getElementById("questionText");
		
		this.answerbutton1 = document.getElementById("answerButton_1");
		this.answerbutton1.addEventListener('click', ()=>{this.setNewValue("answer1")});
		
		this.answerbutton2 = document.getElementById("answerButton_2");
		this.answerbutton2.addEventListener('click', ()=>{this.setNewValue("answer2")});
		
		this.answerbutton3 = document.getElementById("answerButton_3");
		this.answerbutton3.addEventListener('click', ()=>{this.setNewValue("answer3")});
		
		this.dialogue = new Dialogue(); //"http://localhost/dialogs.json"
	
		this.questiontext.innerHTML = "Question: " + this.dialogue.question;
		this.answerbutton1.value = this.dialogue.answer1;
		this.answerbutton2.value = this.dialogue.answer2;
		this.answerbutton3.value = this.dialogue.answer3;
	}
	
	setNewValue(value){
		switch(value){
			case "answer1":
				this.dialogue.CheckAnswer("answer1");
				break;
			case "answer2":
				this.dialogue.CheckAnswer("answer2");
				break;
			case "answer3":
				this.dialogue.CheckAnswer("answer3");
				break;
		}
		
		this.questiontext.innerHTML = "Question: " + this.dialogue.question;
		this.answerbutton1.value = this.dialogue.answer1;
		this.answerbutton2.value = this.dialogue.answer2;
		this.answerbutton3.value = this.dialogue.answer3;
	}
	

	
	
}
