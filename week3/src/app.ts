export interface Guest {
    name: string;
    age: number;
    plus1: string;
    plus2: string;
    isAdult: () => boolean;
    getPlus1: () => string;
    getAge: () => boolean;
    getPluses: () => Array<string>;
}


export class Party implements Guest {
    extras = ['dog'];

    constructor(public name:string, public age: number, public plus1:string, public plus2:string) {
        this.name = name;
        this.age = age;
        this.plus1 = plus1;
        this.plus2 = plus2;
        this.extras = Array<string>(plus1, plus2);
        this.extras.push(this.plus1, this.plus2);

    }

    getAge(): boolean {
        if(this.age >= 21) {return true;}
        else {return false;}
    }

    isAdult(): boolean {
        if(this.age >= 21) {return true;}
        else {return false;}
    }

    getPlus1(): string {
        return this.plus1;
    }

    getPluses(): Array<string> {
        this.extras;
        return this.extras;
    }

}