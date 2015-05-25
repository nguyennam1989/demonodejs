/**
 * Created by nam on 25/05/2015.
 */
var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
require("../StringExtend.js");

/*describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
});*/
describe('String', function() {
    describe('reverse()', function() {
        it('reverse string "love"', function () {
            expect("love".reverse()).to.equal("evol");
        })
    })
});
describe('String', function() {
    describe('reverse()', function () {
        it('reverse string "Chelsea"', function () {
            expect("Chelsea".reverse()).to.equal("aeslehC");
        })
    });


    describe('camelcase()', function () {
        it('camelize string "all men are created equal"', function () {
            expect("all men are created equal".camelcase()).to.equal("All Men Are Created Equal");
        });
    })
});
describe('wordscount',function(){
    it('wordscount string "xin chao cac ban"',function(){
        expect("xin chao cac ban ".wordscount());
    });
});