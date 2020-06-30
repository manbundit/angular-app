import { Component, ViewChild } from '@angular/core';
// import { FormObject } from './form';
import { Bank } from './models/bank';
import { FormModel } from './models/form-model';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    title = 'itax-assignment';
    @ViewChild('form') myForm : NgForm;
    selectedBank: Bank;
    bankList: Bank[] = [];
    isFormInvalid: boolean = false;
    model: FormModel = new FormModel(null, null, null);
    ngOnInit() {
        this.getBankList();
    }
    getBankList() {
        let banks: Bank[] = [
            {
                id: 1,
                title: 'กสิกร',
                image_url: '/assets/images/group-5.png',
                paymentMethod: [
                    {
                        id: 11,
                        methodName: 'โอนเข้าบัญชี 1',
                    },
                    {
                        id: 12,
                        methodName: 'โอนเข้าบัญชี 2',
                    },
                    {
                        id: 13,
                        methodName: 'โอนเข้าบัญชี 3',
                    },
                ],
            },
            {
                id: 2,
                title: 'ไทยพาณิชย์',
                image_url: '/assets/images/group-14-copy.png',
                paymentMethod: [
                    {
                        id: 11,
                        methodName: 'โอนเข้าบัญชี 1',
                    },
                    {
                        id: 12,
                        methodName: 'โอนเข้าบัญชี 2',
                    },
                    {
                        id: 13,
                        methodName: 'โอนเข้าบัญชี 3',
                    },
                ],
            },
            {
                id: 3,
                title: 'บัวหลวง',
                image_url: '/assets/images/group-14-copy-2.png',
            },
        ];
        for (let i in banks) {
            let bank = banks[i];
            let payments = bank.paymentMethod ?? [];
            this.bankList.push(
                new Bank(bank.id, bank.title, bank.image_url, payments)
            );
        }
    }
    selectBank(bank: Bank) {
        this.selectedBank = bank;
        this.model.bank = bank.title;
        delete this.model?.method;
        // this.model.method = null;
        // this.model.method = bank.paymentMethod[0]?.methodName
            // ? bank.paymentMethod[0].methodName
            // : '';
    }
    submitForm(form: NgForm) {
        let data = form.value
        data.bank = this.model.bank
        console.log(form.value);
        
        // console.log(this.model);
        this.selectedBank = null
        form.reset();
    }
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
