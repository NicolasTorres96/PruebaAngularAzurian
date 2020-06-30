export class User {
    public id: number;
    public name: string;
    public age: number;
    public username: string;

    constructor(id: number, name: string, age: number, username: string){
        this.id = id;
        this.name = name;
        this.age = age;
        this.username = username;
    }
}
