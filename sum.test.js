

const sum = require('./sum')

test("проверка функции сумы", ()=>{
    expect(sum(1,2)).toBe(3)
})