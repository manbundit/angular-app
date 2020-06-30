import { Component, Input, forwardRef, Directive, ElementRef } from '@angular/core';
import {
    NG_VALUE_ACCESSOR,
    ControlValueAccessor,
    NgModel,
} from '@angular/forms';
// import { FormObject } from './form';

@Component({
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => CustomInputComponent),
        },
        {
            provide: 'test',
            useExisting: forwardRef(() => CustomInputComponent)
        }
    ],
    selector: 'app-custom-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.less'],
})
export class CustomInputComponent implements ControlValueAccessor {
    @Input() name: string;
    @Input() required: boolean;
    @Input() placeholder: string = '';
    @Input() maxlength: string;
    @Input() label: string;
    @Input() validateText = {
        patternMismatch: 'invalid format',
        isEmpty: 'this field cannot be empty',
    };
    @Input() isInvalidFormat: boolean = false;
    @Input() isEmpty: boolean = false;
    value: string;

    constructor(private elementRef: ElementRef) {}
    
    onChange: (_: any) => void;

    onTouched: () => void;

    writeValue(value: any) {
        this.value = value;
    }

    handleChange(e) {
        // let classes = this.elementRef.nativeElement.classList;
        // if(!classes.contains('ng-pristine')) {
    
        // }
        this.onChange(e)

        
       
    }

    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: (_: any) => void): void {}
}
