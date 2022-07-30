import moment from 'moment' //  для формата даты время
import {fs, mkdir, mkdirSync, writeFile} from "file-system"; // файловая система
import config from './config.js'


import express from "express"
const exp = express()

exp.get('/', (req, res) => {
    res.send('Hello Sir')
})
exp.listen(3001, () => console.log('Server ready'))

export let loggerFile
process.on('SIGBREAK', loggerFile = (options) => {
             const levelName = getlevels(options.level) // указанный тип ошибки(error, debug, warn)
            const message = options.message ?? 'Undentified Error' // если не указано сообщение, то в файл записывается 'Undentified Error'
           writeToFile(levelName, message)
})


    let logsArray = []
    const  writeToFile = (levelName, message) => {
        const logsDir = './logs' // указание директория в котором моздается файл
        let data = `{"level": "${levelName.toUpperCase()}", "message": "${message}", "timestamp": "${getFormatedCurrenDate()}" }\n`
        logsArray.push(data)

        if(!fs.existsSync(logsDir)){ //проверка наличия и создание папаки, если ее нет
            mkdirSync(logsDir)
        } else if (logsArray.length == 3){
            let stringLine = '';
            logsArray.forEach(logsArr => (stringLine += logsArr))
            console.log(stringLine)
            //fs.appendFileSync(`./logs/${levelName}.log`, stringLine) // создание отдельного файла
            fs.appendFileSync(`./logs/loggerFile.log`, stringLine)
            logsArray = []
        }
    }








// export const loggerFile = (options) => {
//     const levelName = getlevels(options.level) // указанный тип ошибки(error, debug, warn)
//     const message = options.message ?? 'Undentified Error' // если не указано сообщение, то в файл записывается 'Undentified Error'
//     writeToFile(levelName, message)
// }










const getlevels = (level) =>{
    return level && config.levels.hasOwnProperty(level) ? level : 'info'
}

const getFormatedCurrenDate = () => { // формат
    return moment(new Date()).format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS)
}



