let words = [
  'программа',
  'макака',
  'прекрасный',
  'оладушек',
  'компьютер',
  'мышь',
  'монитор',
  'магазин',
  'видеокарта',
  'мяч',
  'спорт',
  'прыжок',
  'бег',
  'отжимания',
  'ракета',
  'космос',
]

let word = words[Math.floor(Math.random() * words.length)]

let answerArray = []
for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_'
}

let remainingLetters = word.length
let attempts = word.length * 2

alert('Попыток на загаданное слово: ' + attempts)

while (remainingLetters > 0 && attempts > 0) {
  alert(answerArray.join(' '))
  let guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры')
  if (guess === null) {
    break
  } else if (guess.length !== 1) {
    alert('Пожалуйста, введите только одну букву.')
  } else {
    for (let k = 0; k < word.length; k++) {
      guess = guess.toLowerCase()
      if (word[k] === guess) {
        if (answerArray[k] === guess) {
          attempts--
        } else {
          answerArray[k] = guess
          remainingLetters--
          attempts--
        }
      }
    }
    if (word.indexOf(guess) === -1) {
      attempts--
    }
  }
}

if (attempts === 0) {
  alert('Вы проиграли, не огорчайтесь. Загаданное слово было: ' + word)
} else if (remainingLetters === 0) {
  alert(answerArray.join(' '))
  alert('Отлично! Было загадано слово: ' + word)
} else {
  alert(answerArray.join(' '))
  alert('Отлично! Было загадано слово: ' + word)
}
