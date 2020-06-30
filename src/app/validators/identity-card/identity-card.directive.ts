import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: '.identity-card.custom-input,[identityCard]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => identityCardValidator),
            multi: true,
        },
    ],
})
export class identityCardValidator implements Validator {
    constructor() {}
    validate(control: AbstractControl): { [key: string]: any } | null {
        let value = control.value || '';
        return !this.checkIdentity(value)
            ? { invalidFormat: { value: control.value } }
            : null;
    }

    checkIdentity(id: string): boolean {
        let total: number = 0;
        let compareNumber: number;
        let checkValidNumber: number;
        let idCut: number;
        checkValidNumber = parseInt(id.substr(12, 1));
        let j = 0;
        for (let n = 0; n < 12; n++) {
            idCut = parseInt(id.substr(j, 1));
            total = total + idCut * (13 - n);
            j++;
        }
        compareNumber = 11 - (total % 11);

        if (compareNumber == 10) {
            compareNumber = 0;
        } else if (compareNumber == 11) {
            compareNumber = 1;
        }
        if (compareNumber == checkValidNumber) {
            return true;
        } else {
            return false;
        }
    }
}
