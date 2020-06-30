import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => CustomSelectComponent),
        },
    ],
    selector: 'app-custom-select',
    templateUrl: './custom-select.component.html',
    styleUrls: ['./custom-select.component.less'],
})
export class CustomSelectComponent implements ControlValueAccessor {
    @Input() children = [];
    @Input() label: string;
    @Input() required: boolean;
    @Input() disabled: boolean;
    @Input() placeholder: string = '';
    @Input() isInvalidFormat: boolean = false;
    @Input() isEmpty: boolean = false;
    @Input() validateText = {
        patternMismatch: 'invalid pattern',
        isEmpty: 'this field cannot be empty',
    };
    value: string;

    constructor() {}
    onChange: (_: any) => void;

    onTouched: () => void;

    writeValue(value: any) {
        this.value = value;
    }

    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: (_: any) => void): void {}

    handleSelect(e) {
        this.onChange(e.target.value);
    }
}
