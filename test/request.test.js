const {describe, it, before, afterEach} =require('mocha')
const assert = require('assert')
const Request = require('../src/request')
const {createSandbox} = require('sinon')


describe('Request helpers', () => {
    let sandbox
    let request
    
    before(() => {
        sandbox = createSandbox()
        request = new Request()
    })

    afterEach(() => sandbox.restore())


    it('shoud test', () => {
        assert.ok(true)
    })
})