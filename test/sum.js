const fs = require('file-system')

function words(){
    let word1 = "hello"
    let word2 = "world"
    RecFile(word1, word2)
}

let wordArray = []
const  RecFile = (wrd1, wrd2) => {
    let sample = `{"word1": "${wrd1}", "word1": "${wrd2}", "message": "message" } \n`
    wordArray.push(sample)

    let sw = ''
    wordArray.forEach(words => (sw += words))
    fs.appendFileSync(`./logs/loggerFile.log`, sw)
    wordArray = []
}

words()

exports.module = RecFile