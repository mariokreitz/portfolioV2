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
})
export class Button {
    public readonly titleKey: InputSignal<string> = input.required<string>();
    public readonly buttonType: InputSignal<ButtonType> = input.required<ButtonType>();
    public readonly className: InputSignal<string | undefined> = input<string>();
    protected readonly buttonClasses: Signal<string> = computed(() =>
      cn(
        'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition-colors',
        'bg-brand-primary text-white hover:bg-brand-secondary active:bg-indigo-800',
        'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-indigo-600',
        this.className(),
      ),
    );
}
