export class LogStatus
{
    status:boolean;

    constructor (status:boolean) {
        this.status = status;
    }
}

export class LoginData {
    Email:string;
    Password:string;
    constructor (email:string, password:string) {
        this.Email = email;
        this.Password = password;
    }

}