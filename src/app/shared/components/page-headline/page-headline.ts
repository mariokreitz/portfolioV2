import { Component, computed, input, type InputSignal, type Signal } from '@angular/core';
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
    public readonly className: InputSignal<string | undefined> = input<string>();
    protected readonly headlineClasses: Signal<string> = computed(() =>
      cn('', this.className()),
    );
}


