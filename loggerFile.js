import moment from 'moment' //  для формата даты время
import {fs, mkdir, mkdirSync, writeFile} from "file-system"; // файловая система
import process from "node:process"

import express from 'express'

const exp = express()
exp.get('/', (req, res) => {
    res.send('Hello Sir')
})
exp.listen(3002, () => console.log('Server ready'))


//error
//info
//warn
//debug

//access
//system
//databases
//event
//fatal


    function loggerFileError() {
    const levelName = "error" // указанный тип ошибки(error, debug, warn)
    const message = "error message" // если не указано сообщение, то в файл записывается 'Undentified Error'
    writeToFile(levelName, message)
    }
    process.on('SIGINT', loggerFileError);

    function loggerFileInfo() {
        const levelName = "error" // указанный тип ошибки(error, debug, warn)
        const message = "error message" // если не указано сообщение, то в файл записывается 'Undentified Error'
        writeToFile(levelName, message)
    }
    process.on('SIGINT', loggerFileInfo);

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





function loggerFileSigusr1() {
    const levelName = "sigusr" // указанный тип ошибки(error, debug, warn)
    const message = "sigusr message" // если не указано сообщение, то в файл записывается 'Undentified Error'
    writeToFile(levelName, message)
}
process.on('SIGUSR1', loggerFileSigusr1);

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





const getFormatedCurrenDate = () => { // формат
    return moment(new Date()).format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS)
}



