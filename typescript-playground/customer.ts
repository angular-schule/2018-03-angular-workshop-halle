export class Customer {
    id: number;

    constructor(id: number) {
        this.id = id;
    }

    private calculateNumber(): number {
        return this.id * 10;
    }

    foobar(name: string | number) {
        console.log(this.id);
        debugger;
        if(typeof name === 'number') {
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
