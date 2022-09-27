const fs = require('file-system'); // импортируем модуль файловой системы
jest.mock('file-system'); // мокаем выбранный модуль

const existsMocked = jest.fn() // создание имитирующей функции
    .mockReturnValue(true) // Принимает значение, которое будет возвращаться всякий раз, когда вызывается имитационная функция.

const mkdirSyncMocked = jest.fn();// создание имитирующей функции
const appendFileSyncMocked = jest.fn();// создание имитирующей функции

fs.existsSync = existsMocked;
fs.mkdirSync = mkdirSyncMocked;
fs.appendFileSync = appendFileSyncMocked;

const writeToFile =  require('./loggerFile.js') // импорт функции из модуля

describe('test check', () => {
    it('write data to file', () => {
        for(let i = 0; i < 9; i++) { // сколько раз вызвать функцию
            writeToFile("error", "message"); // передача параметров функции
            expect(existsMocked.mock.calls.length).toBe(i+1); // сколько раз вызвать мок функцию existsMocked (i+1 раз)
            expect(mkdirSyncMocked.mock.calls.length).toBe(0);
            expect(appendFileSyncMocked.mock.calls.length).toBe(0);
        }
        writeToFile("error", "message"); // передача параметров функции
        expect(existsMocked.mock.calls.length).toBe(10);
        expect(mkdirSyncMocked.mock.calls.length).toBe(0);
        expect(appendFileSyncMocked.mock.calls.length).toBe(1);

    });

    it('mkdir sync testing', () => { // тест строка 43
        fs.existsSync.mockReturnValueOnce(false);// значение, которое будет возвращаться при каждом вызове имитационной функции.
        writeToFile('error', 'message'); // передача параметров функции
        expect(mkdirSyncMocked.mock.calls.length).toBe(1); // количество вызовов функции
        expect(mkdirSyncMocked.mock.calls[0][0]).toBe('./logs'); // переданный первый аргумент
    });

    it("запись строки в файл appendFileSync", ()=>{
        const controlValue = `{"level": "ERROR", "message": "message", "timestamp": "9/21/2022" }
{"level": "ERROR", "message": "message", "timestamp": "9/21/2022" }
{"level": "ERROR", "message": "message", "timestamp": "9/21/2022" }
{"level": "ERROR", "message": "message", "timestamp": "9/21/2022" }
{"level": "ERROR", "message": "message", "timestamp": "9/21/2022" }
{"level": "ERROR", "message": "message", "timestamp": "9/21/2022" }
{"level": "ERROR", "message": "message", "timestamp": "9/21/2022" }
{"level": "ERROR", "message": "message", "timestamp": "9/21/2022" }
{"level": "ERROR", "message": "message", "timestamp": "9/21/2022" }
{"level": "ERROR", "message": "message", "timestamp": "9/21/2022" }
`;
        for( let i = 0; i < 9; i++ ) {
            writeToFile('error', 'message');
            expect(appendFileSyncMocked.mock.calls.length).toBe(0);
        }
        writeToFile('error', 'message');
        expect(appendFileSyncMocked.mock.calls.length).toBe(1)
        expect(appendFileSyncMocked.mock.calls[0][0]).toBe('./logs/loggerFile.log')
        expect(appendFileSyncMocked.mock.calls[0][1]).toBe(controlValue);
    });
//

    //appendFileSync
});