let words = [
 "программа",
 "макака",
 "прекрасный",
 "оладушек"
]

let word = words[Math.floor(Math.random() * words.length)]

let answerArray = []
for(let i = 0; i < word.length; i++)
{
	answerArray[i] = "_"
}

let remainingLetters = word.length;

while(remainingLetters > 0) {
	alert(answerArray.join(" "))
	let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры")
	if(guess === null) 
	{
		break;
	} else if (guess.length !== 1) {
		alert("Пожалуйста, введите только одну букву.")
	} else {
		for(let k = 0; k < word.length; k++)
		{
			if(word[k] === guess)
			{
				answerArray[k] = guess
				remainingLetters--
			}
		}
	}
}

alert(answerArray.join(" "))
alert("Отлично! Было загадано слово: " + word)