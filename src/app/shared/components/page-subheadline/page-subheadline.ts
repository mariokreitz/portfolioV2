import { Component, computed, input, type InputSignal, type Signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { cn } from '../../utils';

@Component({
    selector: 'app-page-subheadline',
    imports: [
        TranslatePipe,
    ],
    templateUrl: './page-subheadline.html',
    styleUrl: './page-subheadline.css',
})
export class PageSubheadline {
    public readonly titleKey: InputSignal<string> = input.required<string>();
    public readonly className: InputSignal<string | undefined> = input<string>();
    protected readonly subheadlineClasses: Signal<string> = computed(() =>
      cn('', this.className()),
    );
}
