
const RecFile = jest.fn()


test( "writeToFile", ()=> {
    expect(RecFile.mockReturnValueOnce("error"))
})
