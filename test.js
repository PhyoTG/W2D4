"use strict";

describe("Filter BannedWords",function(){
    it("remove banned words from a string", function() {
        assert.equal("This house is not nice!".filter('not'), "This house is nice!"); 
    });
});

describe("Array BubbleSort", () => {
    it("Sorts an array in an ascending order", () => {
        expect([-2, 0, 1, 3, 4, 6]).to.eql([6, 4, 0, 3, -2, 1].bubbleSort());
    });
});

describe("Inheritance", () => {
    it("Student object derived from the Person class", () => {
        var me = new Student();
        me.initialize("John", 25);
        assert.equal(me.learn("Inheritance"),"John just learned Inheritance");
    });
});