var expect = require('chai').expect;
var sinon  = require('sinon');

var middleware = require('../index');

describe("express save-data middleware", function(){

    describe("middleware functions", function(){
        var md;

        beforeEach(function(){
            md = middleware;
        });

        it("should be a function", function(){
            expect(md).to.be.a("function");
        });

        it("should take three args", function(){
            expect(md.length).to.equal(3)
        });
    });

    describe("middleware calling", function(){
        var md;
        beforeEach(function(){
            md = middleware;
        });

        it("should call next(), once", function(){
            var spy = sinon.spy();

            md({get: function(){return "on"}}, {}, spy);
            expect(spy.calledOnce).to.be.true;
        });
    });

});