import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  public transactionList: any= [];
  public running = 0;
  constructor(private appService : AppService) { }

  ngOnInit(): void {
    this.getTransactions()
  }

  getTransactions(){
    this.appService.transactionList({}).subscribe(res=>{
      console.log(res);
        if(res['success']){
          this.transactionList = res['data'];
        }
       });    
  }

  totalBalance(data){
    this.running = data.type == 'Credit'?(this.running+parseFloat(data.amount)):(this.running-parseFloat(data.amount));
    return this.running;
  }
}
