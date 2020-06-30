import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[date]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => dateValidator),
            multi: true,
        },
    ],
})
export class dateValidator implements Validator {
    constructor() {}
    validate(control: AbstractControl): { [key: string]: any } | null {
        let value = control.value || '';
        return !this.checkDate(value)
            ? { invalidFormat: { value: control.value } }
            : null;
    }

    checkDate(date: string): boolean {
        let datePart = date.split('/');
        let day = datePart[0];
        let month = datePart[1];
        let year = datePart[2];
        if(!day || !month || !year || year?.length < 4){
            return false;
        }
        let dateInput = new Date([month,day,year].join('/'));
        let today = new Date();
        return dateInput instanceof Date && !isNaN(dateInput.valueOf()) && dateInput <= today;

    }
}
