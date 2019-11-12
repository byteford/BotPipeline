var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where the program is running

var server = supertest.agent("http://localhost:400");

//UNIT test begin

describe("SAMPLE unit test",function(){
    //#1 shoud return home page
    it("should return home page",function(done){
        server
        .get("/")
        .expect("content-type",/text/)
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(200);
            done();
        });
    });
});