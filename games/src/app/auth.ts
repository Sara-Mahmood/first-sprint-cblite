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

export class RegisterData {
    Username:string;
    Email:string;
    Password:string;

    constructor (username:string, email:string, password:string) {
        this.Username = username;
        this.Email = email;
        this.Password = password;
    }
}