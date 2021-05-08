import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LogStatus } from './auth';

@Injectable()
export class LoginStatus {
    log:LogStatus = {status:false, username:"", userId:null};
    source: BehaviorSubject<LogStatus> = new BehaviorSubject<LogStatus>(this.log);
    current = this.source.asObservable();

    constructor() {
        this.source.subscribe((value) => {
            this.log = value;
        });
     }

    changeStatus(status: LogStatus) {
        this.source.next(status)
    }

}