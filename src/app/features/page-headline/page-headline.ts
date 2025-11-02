import { Component, input, type InputSignal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-page-headline',
    imports: [
        TranslatePipe,
    ],
    templateUrl: './page-headline.html',
    styleUrl: './page-headline.css',
})
export class PageHeadline {
    public readonly title: InputSignal<string> = input.required<string>();
}
