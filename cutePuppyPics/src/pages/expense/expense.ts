/**
 * Created by wxy on 2017/1/26.
 */
import { Component } from '@angular/core';

import { NavController, ToastController, ItemSliding } from 'ionic-angular'

import { ExpenseDetailPage } from './expense-detail';

@Component({
  selector: 'page-expense',
  templateUrl: 'expense.html',
})
export class ExpensePage {


  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {

  }

  expenses = [
    {id: 1, name: '员工福利费', totalAmount: 265, consumeDate: '2017-07-06'},
    {id: 2, name: '员工出差费', totalAmount: 1260, consumeDate: '2017-01-06'},
    {id: 3, name: '过节费', totalAmount: 500, consumeDate: '2017-07-06'},
    {id: 4, name: '招聘费', totalAmount: 1050, consumeDate: '2017-07-06'},
    {id: 5, name: '洗车费', totalAmount: 123, consumeDate: '2017-07-06'},
    {id: 6, name: '打车费', totalAmount: 685, consumeDate: '2017-07-06'},
  ]

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  alert(item){
    console.log(item)
    // this.presentToast();
    this.navCtrl.push(ExpenseDetailPage, item);
  }
  del(item){
    let index = this.expenses.findIndex((n) => n.id == item.id);
    this.expenses.splice(index, 1);
  }
  copy(item, expenseList: ItemSliding){
    const copy = Object.assign({}, item);
    copy.id = this.expenses.length + 1;
    this.expenses.push(copy);
    expenseList.close();
  }

}
