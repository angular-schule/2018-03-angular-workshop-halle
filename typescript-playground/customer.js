"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
    }
    Customer.prototype.calculateNumber = function () {
        return this.id * 10;
    };
    Customer.prototype.foobar = function (name) {
        var _this = this;
        console.log(this.id);
        debugger;
        if (typeof name === 'number') {
            return name.toString();
        }
        console.log(name);
        var self = this;
        function foo() {
            return self.calculateNumber();
        }
        var bar = function () { return _this.calculateNumber(); };
        /*const text = 'Hallo \n' +
        'Welt\n' +
        '!';*/
        var city = 'Halle/Saale';
        var text = "\n        Hallo \n        Hallo " + city + "\n        Hallo hallo\n        ";
        console.log(text);
        console.log(foo());
        console.log(bar());
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map