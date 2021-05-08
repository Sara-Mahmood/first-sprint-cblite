import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestService } from '../rest.service';
import { LoginStatus } from "../logStatus.service";
import { Subscription, interval } from 'rxjs';
import { LogStatus, Stats } from '../auth';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit, OnDestroy {
  
  // sub?: Subscription;
  logStatus?:LogStatus;

  // ls:boolean = false;
  username?:string;
  score?:number;
  rank?:number;

  constructor(private rs:RestService, private login: LoginStatus) { 
    this.logStatus = login.log;
  }

  // subscription: Subscription = this.log.current.subscribe(status => this.logStatus = status);
  get loginstatus(): LogStatus {
    this.logStatus = this.login.log;
    return this.login.log;
  }


  ngOnInit(): void {
    // const source = interval(10000);
    // this.sub = source.subscribe(val => console.log(this.logStatus));
  }
  
  ngOnDestroy() {
    // this.subscription?.unsubscribe();
  }

  getUserStatistics() {
    if (this.logStatus?.userId != null) {
      this.rs.getStats(this.logStatus.userId).subscribe((stats:Stats) => {
        this.username = stats.username;
        this.score = stats.score;
        this.rank = stats.rank;
      })
    }
  }

  

}
