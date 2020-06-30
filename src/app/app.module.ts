import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { LogPipe } from './util/log.pipe';
import { identityCardValidator } from './validators/identity-card/identity-card.directive';
import { dateValidator } from './validators/date/date.directive';

@NgModule({
    declarations: [
        AppComponent,
        CustomInputComponent,
        CustomSelectComponent,
        LogPipe,
        identityCardValidator,
        dateValidator,
    ],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
