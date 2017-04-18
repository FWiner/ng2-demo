import { Component} from '@angular/core';

import { NavController, NavParams } from 'ionic-angular'

@Component({
  selector: 'page-expense-detail',
  templateUrl: 'expense-detail.html',
})
export class ExpenseDetailPage {

  name;id;consumeDate;totalAmount;


  constructor(public navCtrl: NavController, public params: NavParams) {
    this.id = params.get('id');
    this.name  = params.get('name');
    this.consumeDate = params.get('consumeDate');
    this.totalAmount = params.get('totalAmount');
  }
}
