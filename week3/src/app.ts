export interface Guest {
    name: string;
    age: number;
    plus1: string;
    plus2: string;
    isAdult: () => boolean;
    getAge: () => boolean;
    getPluses: () => Array<string>;
}


export class Party implements Guest {
    extras = [''];

    constructor(public name:string, public age: number, public plus1:string, public plus2:string) {
        this.name = name;
        this.age = age;
        this.plus1 = plus1;
        this.plus2 = plus2;
        this.extras = Array<string>(plus1, plus2);

    }

    getAge(): boolean {
        return this.age >=21;
    }

    isAdult(): boolean {
        return this.age >=21;
    }

    getPluses(): Array<string> {
        return this.extras;
    }

}