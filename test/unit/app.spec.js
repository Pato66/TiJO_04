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
        it('should return false when arguments of function numberFor is equal to numberTo', function() {
            expect(app.getDescendingNumbers(10,10)).toEqual(false);
        });
        it('should return two values in string when arguments of function numberFor more about one than numberTo', function() {
            expect(app.getDescendingNumbers(11,10)).toEqual("11 10");
        });
    describe('areaOfTrapezoid function', function() {
        it('should return false when a is less than zero', function() {
            expect(app.areaOfTrapezoid(-3,2,3).toEqual(false));
        })
        it('should return false when b is less than zero', function() {
            expect(app.areaOfTrapezoid(3,-2,3).toEqual(false));
        })
        it('should return false when h is less than zero', function() {
            expect(app.areaOfTrapezoid(3,2,-3).toEqual(false));
        })
    });



    });
});
