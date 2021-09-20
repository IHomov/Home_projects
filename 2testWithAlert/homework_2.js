let userRate = 0;
let userAnswer = 0;
const amountQuestions = 5;
const arrayQuestions = [
	`Hello! Let's start our quiz. You need to give 5 answers. All of them should be in numeric format. First question: What was the year when Ukraine got independency?`,
	`When the Second World War was started?`,
	`What year did Apple release the first Iphone?`,
	`Does how many players have classic football team?`,
	`How many parts of the movie 'Pirates of the Caribbean' have been released?`,
]
const arrayAnswers = [
	'1991',
	'1939',
	'2007',
	'11',
	'5',
]

for(let i = 0; i < amountQuestions; i++){

	userAnswer = prompt(arrayQuestions[i]);

	if(userAnswer == arrayAnswers[i]){
		userRate += 1;
	} 
}

alert(`Congratulations! You finished the test with the result ${userRate}/5.`)