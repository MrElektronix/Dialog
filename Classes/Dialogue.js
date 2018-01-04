class Dialogue{
	constructor(){
		this.question;
		this.answer1;
		this.answer2;
		this.answer3;
		
		this.init();
		
		this.player;
		this.currentIndex;
		this.nextIndex;
	
		
	}
	
	init(){
		this.currentIndex = 0;
		this.player = {
			qa: [ 	{
						question: "What kind of shop do you wanna visit",
						answer1: {a: "Magic Shop", Next: 1},
						answer2: {a: "Armour Shop" , Next: 2},
						answer3: {a: "Potion Shop", Next: 3},
					},
				 
				 	{
						question: "Welcome to the Magic Shop, what would you like to buy?",
						answer1: {a: "A fireball spell", Next: 3},
						answer2: {a: "A frost spell", Next: 4},
						answer3: {a: "A earth spell", Next: 5},
					},
				 
				 	{
						question: "Welcome to the armour Shop, what would you like to buy?",
						answer1: {a: " A pair of boots", Next: 5},
						answer2: {a: " A helmet" , Next: 6},
						answer3: {a: "A chest plate", Next: 7},
					},
				 
				 	{
						question: "Welcome to the Potion Shop, what would you like to buy?",
						answer1: {a: "A healing potion", Next: 7},
						answer2: {a: "A damage potion", Next: 8},
						answer3: {a: "A poision potion", Next: 9},
					},
				 
				 	{
						//fireball spell
						question: "Thank you for purchasing a fireball spell",
						answer1: {a: ""},
						answer2: {a: ""},
						answer3: {a: ""},
					},
				 
				 	{
						//frost spell
						question: "Thank you for purchasing a frost spell",
						answer1: {a: ""},
						answer2: {a: ""},
						answer3: {a: ""},
					},
				 	
				 	{
						//earth spell
						question: "Thank you for purchasing a earth spell",
						answer1: {a: ""},
						answer2: {a: ""},
						answer3: {a: ""},
					},
				 
				 	{
						//boots
						question: "Thank you for purchasing boots",
						answer1: {a: ""},
						answer2: {a: ""},
						answer3: {a: ""},
					},
				 
				 	{
						//helmet
						question: "Thank you for purchasing a helmet",
						answer1: {a: ""},
						answer2: {a: ""},
						answer3: {a: ""},
					},
				 	
				 	{
						//chestplate
						question: "Thank you for purchasing a chestplate",
						answer1: {a: ""},
						answer2: {a: ""},
						answer3: {a: ""},
					},
				 
				 
				 	 {
						//health potion
						question: "Thank you for purchasing a health potion",
						answer1: {a: ""},
						answer2: {a: ""},
						answer3: {a: ""},
					},
				 
				 	{
						//damage potion
						question: "Thank you for purchasing a damage potion",
						answer1: {a: ""},
						answer2: {a: ""},
						answer3: {a: ""},
					},
				 	
				 	{
						//poision potion
						question: "Thank you for purchasing a poision potion",
						answer1: {a: ""},
						answer2: {a: ""},
						answer3: {a: ""},
					},
	
				],
		}
		this.refreshQA();
	}
	
	refreshQA() {	
		this.question = this.player.qa[this.currentIndex].question;
		this.answer1 = this.player.qa[this.currentIndex].answer1.a;
		this.answer2 = this.player.qa[this.currentIndex].answer2.a;
		this.answer3 = this.player.qa[this.currentIndex].answer3.a;
	}
	
	CheckAnswer(value) {
		if(value == "answer1") {
			this.SetQA(this.player.qa[this.currentIndex].answer1.Next);
		}
		
		if(value == "answer2") {
			this.SetQA(this.player.qa[this.currentIndex].answer2.Next);
		}
		
		if(value == "answer3") {
			this.SetQA(this.player.qa[this.currentIndex].answer3.Next);
		}
	}
	
	SetQA(nextIndex){
		this.nextIndex = this.currentIndex += nextIndex;
		this.question = this.player.qa[this.nextIndex].question;
		this.answer1 = this.player.qa[this.nextIndex].answer1.a;
		this.answer2 = this.player.qa[this.nextIndex].answer2.a;
		this.answer3 = this.player.qa[this.nextIndex].answer3.a;
	}
}