import { Component, computed, input, type InputSignal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { cn } from '../../utils';

@Component({
    selector: 'app-page-headline',
    imports: [
        TranslatePipe,
    ],
    templateUrl: './page-headline.html',
    styleUrl: './page-headline.css',
})
export class PageHeadline {
    public readonly titleKey: InputSignal<string> = input.required<string>();
    public readonly class: InputSignal<string | undefined> = input<string>();

    protected readonly headlineClasses = computed(() =>
      cn('text-3xl md:text-4xl', this.class()),
    );
}


