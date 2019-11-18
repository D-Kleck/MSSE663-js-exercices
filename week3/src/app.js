"use strict";
exports.__esModule = true;
var Party = /** @class */ (function () {
    function Party(name, age, plus1, plus2) {
        this.name = name;
        this.age = age;
        this.plus1 = plus1;
        this.plus2 = plus2;
        this.extras = [];
        this.name = name;
        this.age = age;
        this.plus1 = plus1;
        this.plus2 = plus2;
        var extras = [this.plus1, this.plus2];
    }
    Party.prototype.isAdult = function () {
        if (this.age >= 21) {
            return true;
        }
        else {
            return false;
        }
    };
    Party.prototype.getPluses = function () {
        return this.extras;
    };
    return Party;
}());
exports.Party = Party;
