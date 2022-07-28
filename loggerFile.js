import moment from 'moment' //  для формата даты время
import {fs, mkdir, mkdirSync, writeFile} from "file-system"; // файловая система
import config from './config.js'

export const loggerFile = (options) => {
    const levelName = getlevels(options.level) // указанный тип ошибки(error, debug, warn)
    const message = options.message ?? 'Undentified Error' // если не указано сообщение, то в файл записывается 'Undentified Error'



    writeToFile(levelName, message)


}

    let logsArray = ""

    const  writeToFile = (levelName, message) => {

        const logsDir = './logs' // указание директория в котором моздается файл
        let data = `{"level": "${levelName.toUpperCase()}", "message": "${message}", "timestamp": "${getFormatedCurrenDate()}" } \r\n`

        logsArray.push(data)


        if(!fs.existsSync(logsDir)){ //проверка наличия и создание папаки, если ее нет
            mkdirSync(logsDir)
        }
}

console.log(logsArray)



// if(logsArray.length >= 500){
//
//     let stringLine = ''
//     logs.forEach(log => (stringLine += JSON.stringify(stringLine)))
//
//     writeToFile(stringLine)
// }














const getlevels = (level) =>{
    return level && config.levels.hasOwnProperty(level) ? level : 'info'
}

const getFormatedCurrenDate = () => { // формат
    return moment(new Date()).format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS)
}
//fs.appendFileSync(`./logs/${levelName}.log`, data) // создание отдельного файла
// fs.appendFileSync(`./logs/logFile.log`, data) // запись логов в один файл