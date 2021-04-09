const {describe, it, before, afterEach} =require('mocha')
const assert = require('assert')
const Request = require('../src/request')
const {createSandbox} = require('sinon')


describe('Request helpers', () => {
    const timeout = 15
    let sandbox
    let request
    
    before(() => {
        sandbox = createSandbox()
        request = new Request()
    })

    afterEach(() => sandbox.restore())

    it(`should throw a timeout error when function has spent more than ${timeout}ms`, async() => {
        const exceededTimout = timeout + 10
        sandbox.stub(request, request.get.name)
        .callsFake(() => new Promise(resolve => setTimeout(resolve, exceededTimout)))

        const call = request.makeRequest({url : 'https://testing.com', method: 'get', timeout})

        await assert.rejects(call, {message: 'timeout at [https://testing.com] :('})
    })
    
    it('shoud return ok when promise time is ok')
    it('shoud return a JSON object after a request')
})