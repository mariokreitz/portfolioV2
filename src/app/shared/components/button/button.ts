import { Component, computed, input, type InputSignal, type Signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { cn } from '../../utils';

type ButtonType = 'button' | 'submit' | 'reset';

@Component({
    selector: 'app-button',
    imports: [
        TranslatePipe,
    ],
    templateUrl: './button.html',
    styleUrl: './button.css',
    host: { class: 'inline-block w-fit' },
})
export class Button {
    public readonly titleKey: InputSignal<string> = input.required<string>();
    public readonly buttonType: InputSignal<ButtonType> = input.required<ButtonType>();
    public readonly className: InputSignal<string | undefined> = input<string>();
    protected readonly buttonClasses: Signal<string> = computed(() =>
      cn(
        'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200',
        'bg-brand-primary text-white hover:bg-brand-hover active:bg-brand-active',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
        'disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-brand-primary disabled:bg-slate-600 disabled:text-slate-300',
        'active:scale-95 hover:scale-105 disabled:hover:scale-100 disabled:active:scale-100',
        this.className(),
      ),
    );
}
