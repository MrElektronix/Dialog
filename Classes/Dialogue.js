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
						question: "Hello how are you?",
						answer1: {a: "Very Good !", Next: 1},
						answer2: {a: "Not so good :(" , Next: 2},
						answer3: {a: "I'm Vegan", Next: 3},
					},
				 
				 	{
						question: "Why are you good?",
						answer1: {a: "I smell like fish"},
						answer2: {a: "Because i am married to justice"},
						answer3: {a: "I just finished listening to screaming frogs"},
					},
				 
				 	{
						question: "What is wrong?",
						answer1: {a: "I smell like fish"},
						answer2: {a: "I lost my puppy"},
						answer3: {a: "I saw myself in the mirror"},
					},
				 
				 	{
						question: "Ehh well ok then",
						answer1: {a: "How dare you to say that to me!"},
						answer2: {a: "Remember to eat your vegetables"},
						answer3: {a: "Cthulu will rise again !"},
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
	
	setNewQA(value) {
		
		if(value == "answer1") {
			this.nextIndex = this.currentIndex += this.player.qa[this.currentIndex].answer1.Next;
			
			
			this.question = this.player.qa[this.nextIndex].question;
			this.answer1 = this.player.qa[this.nextIndex].answer1.a;
			this.answer2 = this.player.qa[this.nextIndex].answer2.a;
			this.answer3 = this.player.qa[this.nextIndex].answer3.a;
		}
		if(value == "answer2") {
			this.nextIndex = this.currentIndex += this.player.qa[this.currentIndex].answer2.Next;
			
			this.question = this.player.qa[this.nextIndex].question;
			this.answer1 = this.player.qa[this.nextIndex].answer1.a;
			this.answer2 = this.player.qa[this.nextIndex].answer2.a;
			this.answer3 = this.player.qa[this.nextIndex].answer3.a;
		}
		
		if(value == "answer3") {
			this.nextIndex = this.currentIndex += this.player.qa[this.currentIndex].answer3.Next;
			
			
			this.question = this.player.qa[this.nextIndex].question;
			this.answer1 = this.player.qa[this.nextIndex].answer1.a;
			this.answer2 = this.player.qa[this.nextIndex].answer2.a;
			this.answer3 = this.player.qa[this.nextIndex].answer3.a;
		}
	}
}