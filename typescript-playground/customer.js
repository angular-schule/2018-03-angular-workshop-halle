"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(id) {
        this.id = id;
    }
    calculateNumber() {
        return this.id * 10;
    }
    foobar(name) {
        console.log(this.id);
        debugger;
        if (typeof name === 'number') {
            return name.toString();
        }
        console.log(name);
        let self = this;
        function foo() {
            return self.calculateNumber();
        }
        const bar = () => this.calculateNumber();
        const city = 'Halle/Saale';
        const text = `
        Hallo 
        Hallo ${city}
        Hallo hallo
        `;
        console.log(text);
        console.log(foo());
        console.log(bar());
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map