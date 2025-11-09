import { Component, input, type InputSignal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-section-headline',
    imports: [
        TranslatePipe,
    ],
    templateUrl: './section-headline.html',
    styleUrl: './section-headline.css',
    host: {
        class: 'block mb-4',
    },
})
export class SectionHeadline {
    public readonly title: InputSignal<string> = input.required<string>();
}
