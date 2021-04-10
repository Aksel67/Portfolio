
export class Users {
    public Id: number;
    public name: string;
    public password:string;
    public email:string;
    public username:string;
    public firstname:string;
    public admin:boolean;

    constructor(Id:number,name: string,password:string,email:string,username:string,firstname:string,admin:boolean) {
        this.Id = Id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.firstname = firstname;
        this.username = username;
        this.admin = admin;
    }
}