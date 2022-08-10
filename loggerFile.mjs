import {fs, mkdir, mkdirSync, writeFile} from "file-system"; // файловая система
import process from "node:process"
import express from 'express'

// const process2 = process()
// const moment = moment()
// const fs = fs()
// const mkdirSync = mkdirSync()

const exp = express()
exp.get('/', (req, res) => {
    res.send('Hello Sir')
})
exp.listen(3002, () => console.log('Server ready'))

    function loggerFileError() {
    const levelName = "error" // указанный тип ошибки(error, debug, warn)
    const message = " sigint error message" // если не указано сообщение, то в файл записывается 'Undentified Error'
    writeToFile(levelName, message)
    }
    process.on('SIGINT', loggerFileError);
    process.on('SIGINT', loggerFileError)
    process.on('SIGTERM', loggerFileError)
    process.on('SIGQUIT', loggerFileError)

    function loggerFileWarning() {
        const levelName = "warning" // указанный тип ошибки(error, debug, warn)
        const message = "warning message" // если не указано сообщение, то в файл записывается 'Undentified Error'
        writeToFile(levelName, message)
    }
    process.on('warning', loggerFileWarning);

    function loggerFileDebug() {
        const levelName = "sigusr" // указанный тип ошибки(error, debug, warn)
        const message = "sigusr message" // если не указано сообщение, то в файл записывается 'Undentified Error'
        writeToFile(levelName, message)
    }
    process.on('SIGUSR1', loggerFileDebug);

    function loggerFileSighup() {
        const levelName = "sigusr" // указанный тип ошибки(error, debug, warn)
        const message = "sigusr message" // если не указано сообщение, то в файл записывается 'Undentified Error'
        writeToFile(levelName, message)
    }
    process.on('SIGHUP', loggerFileSighup);

    let logsArray = []
    const  writeToFile = (levelName, message) => {
        const logsDir = './logs' // указание директория в котором моздается файл
        let data = `{"level": "${levelName.toUpperCase()}", "message": "${message}", "timestamp": "${getFormatedCurrenDate()}" }\n`
        logsArray.push(data)

        if(!fs.existsSync(logsDir)){ //проверка наличия и создание папаки, если ее нет
            mkdirSync(logsDir)
        } else if (logsArray.length >= 10){
            let stringLine = '';
            logsArray.forEach(logsArr => (stringLine += logsArr))
            console.log(stringLine)
            //fs.appendFileSync(`./logs/${levelName}.log`, stringLine) // создание отдельного файла
            fs.appendFileSync(`./logs/loggerFile.log`, stringLine)
            logsArray = []
        }
    }

// const  getFormatedCurrenDate = () => {
//     let date = new Date(),
//         hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
//         minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
//         seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
// return (hours + ':' + minutes + ':' + seconds);
// }

const  getFormatedCurrenDate = () => {
    let date = new Date(),
         YMD = date.toLocaleDateString()
    return (YMD)
}

module.exports = writeToFile

