const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const tutorialsWithCapLetters = tutorials.map((sentence)=>{
    const sentenceArray = sentence.split(' ')
    const sentenceWithCapsArray = sentenceArray.map((word)=>{
      const capLetter = word.slice(0,1).toUpperCase()
      const restOfWord = word.slice(1)
      return capLetter + restOfWord
    })
    return sentenceWithCapsArray.join(' ')
  })
  
  return tutorialsWithCapLetters
}
