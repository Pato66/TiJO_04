describe('app', function () {
    'use strict';
    var app = window.app;

    xdescribe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });
    xdescribe('getDescendingNumbers function', function() {
        it('should return false when arguments of function numberFor is less than numberTo', function() {
           expect(app.getDescendingNumbers(5,10)).toEqual(false);
        });
        it('should return string of value between numberFor and numberTo when arguments of function numberFor is more than numberTo', function() {
            expect(app.getDescendingNumbers(12,10)).toEqual("12 11 10");
        });
        it('should return string of value between numberFor and numberTo when arguments of function numberFor is more than numberTo', function() {
            expect(app.getDescendingNumbers(15,10)).toEqual("15 14 13 12 11 10");
        });
        it('should return false when arguments of function numberFor is equal to numberTo', function() {
            expect(app.getDescendingNumbers(10,10)).toEqual(false);
        });
        it('should return two values in string when arguments of function numberFor is larger by one than numberTo', function() {
            expect(app.getDescendingNumbers(11,10)).toEqual("11 10");
        });
    });
    xdescribe('areaOfTrapezoid function', function() {
        it('should return false when a is less than zero', function() {
            expect(app.areaOfTrapezoid(-3,2,3).toEqual(false));
        });
        it('should return false when b is less than zero', function() {
            expect(app.areaOfTrapezoid(3,-2,3).toEqual(false));
        });
        it('should return false when h is less than zero', function() {
            expect(app.areaOfTrapezoid(3,2,-3).toEqual(false));
        });
        it('should return false when h and a are less than zero', function() {
            expect(app.areaOfTrapezoid(-3,2,-3).toEqual(false));
        });
        it('should return false when h and b are less than zero', function() {
            expect(app.areaOfTrapezoid(3,-2,-3).toEqual(false));
        });
        it('should return false when a and b less than zero', function() {
            expect(app.areaOfTrapezoid(-3,-2,3).toEqual(false));
        });
        it('should return false when a and b and h are less than zero', function() {
            expect(app.areaOfTrapezoid(-3,-2,-3).toEqual(false));
        });
        it('should return area of a triangle', function() {
            expect(app.areaOfTrapezoid(3,2,4).toEqual(10));
            expect(app.areaOfTrapezoid(1,2,0).toEqual(0));
            expect(app.areaOfTrapezoid(5,7,6).toEqual(105));
        });
    });
    //------------------------------------------------------------------------------------------------------------------
    xdescribe('maxArray function', function() {
        it('should return the largest number in array', function(){
            expect(app.maxArray([2,3,7,5]).toEqual(7));
            expect(app.maxArray([8,7,6,5,4,3,2,1,0,-9,-11]).toEqual(8));
            expect(app.maxArray([20,3,7,50,16,49]).toEqual(50));
        });
        it('should return false when array will have string type',function(){
           expect(app.maxArray(['Jan','Adam','Michał']).toEqual(false));
        });
        it('should return false when array will have any element of string type',function(){
            expect(app.maxArray([1,'2',3]).toEqual(false));
        });
        it('should return false when argument is another type than the array', function(){
            expect(app.maxArray(2).toEqual(false));
            expect(app.maxArray("jakis napis").toEqual(false));
            expect(app.maxArray(true).toEqual(false));
        });
    });

    describe('squareOdd function', function(){
        it('should return a new array where the odd numbers were squared', function(){
            expect(app.squareOdd([2,3,4,5,6]).toEqual([2,9,4,25,6]));
            expect(app.squareOdd([3,4,5,10,11]).toEqual([9,4,25,10,121]));
            expect(app.squareOdd([2,4,6]).toEqual([2,4,6]));
            expect(app.squareOdd([5,7,9,11]).toEqual([25,49,81,121]));
            expect(app.squareOdd([5,'7',9,11]).toEqual([25,'7',81,121]));
            expect(app.squareOdd(['5','7','9','11']).toEqual(['5','7','9','11']));
        });
        it('should return false when element of array is another type than allowed', function(){
            expect(app.squareOdd([2,3,4,true,7]).toEqual(false));
            expect(app.squareOdd([2,3,4,null,7]).toEqual(false));
            expect(app.squareOdd([2,3,4,[5,6],7]).toEqual(false));
        });
        it('should return false when argument of function is wrong type', function(){
            expect(app.squareOdd(2).toEqual(false));
            expect(app.squareOdd(true).toEqual(false));
            expect(app.squareOdd("jakis napis").toEqual(false));
        })

    });
});
