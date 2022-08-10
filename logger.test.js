
import writeToFile from './loggerFile.mjs'


describe("проверка функции ошибки", ()=>{
    let logArr = [{"level": "ERROR", "message": " sigint error message", "timestamp": "8/10/2022" }]
    expect(writeToFile("error", "sigint error message")).toBe(
        expect.arrayContaining(logArr),
    )
})

//"error", "sigint error message"