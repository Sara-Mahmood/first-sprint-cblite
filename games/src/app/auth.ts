export class LogStatus
{
    status:boolean;
    username:string;
    userId:string|null;

    constructor (status:boolean, username:string, userId:string|null) {
        this.status = status;
        this.username = username;
        this.userId = userId;
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

export class Username {
    username:string;

    constructor (username:string) {
        this.username = username;
    }
}

export class Stats {
    username:string;
    userId:string;
    score:number;
    rank:number;

    constructor (username:string, userId:string, score:number, rank:number, games:number) {
        this.username = username;
        this.userId = userId;
        this.score = score;
        this.rank = rank;
    }
}