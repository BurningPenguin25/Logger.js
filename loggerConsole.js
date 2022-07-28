import path from 'path'; // пути  node.js
import chalk from 'chalk' // подсветка
import moment from 'moment' //  для формата даты время
import {fs, mkdir, mkdirSync, writeFile} from "file-system"; // файловая система
import config from './config.js'

 export const loggerConsole = (options) => {
   const levelName = getlevels(options.level)
     const message = options.message ?? 'Undentified Error'
     const error = options.error && null

   //запись в консоль
     writeToConsole(levelName, message, error)
 }

 const writeToConsole = (levelName, message, error = null) => {

    const level = config.levels[levelName] // наименование лога
     let chalkFunction = chalk[level.color] // цвет записи лога в консоли

     message = error ? `${chalkFunction(`${error.message} \n ${error.stack}`)}` : message
     const header = `[${levelName.toUpperCase()}][${getFormatedCurrenDate()}]` // формат строки выводимый в консоль

     console.log(`${chalkFunction(header)} : ${chalkFunction(message)}`) //  вывод данных в консоль
 }

 const getlevels = (level) =>{ //
return level && config.levels.hasOwnProperty(level) ? level : 'info'
}

const getFormatedCurrenDate = () => { //формат даты
    return moment(new Date()).format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS)
}