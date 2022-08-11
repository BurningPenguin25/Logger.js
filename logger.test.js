//const writeToFile =  require('./loggerFile.js')

const writeToFile = jest.fn(() =>  'error')


   // let logArr = [{"level": "ERROR", "message": " sigint error message", "timestamp": "8/11/2022" }]

    test( "writeToFile", ()=>{
        expect(writeToFile()).toBe({"level": "ERROR", "message": " sigint error message", "timestamp": "8/11/2022" })
    })


// describe('Description', function () {
//     it('updates input value on key press', function () {
//         var description = TestUtils.renderIntoDocument(<Description/>);
//         var input = React.findDOMNode(description.refs.input);
//         expect(input.value).toEqual(''); //This passes
//         TestUtils.Simulate.keyDown(input, {key : "a"});
//         expect(input.value).toEqual('a'); //This fails
//     });