import { CommonModule } from '@angular/common';
import type { OnDestroy, OnInit, Signal, WritableSignal } from '@angular/core';
import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { FontAwesomeModule, type IconDefinition } from '@fortawesome/angular-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import type { Subscription } from 'rxjs';
import { availableLanguagesCode } from '../../constants/available-languages';
import type { LanguageCode } from '../../models/app-language';
import { LangNavigatorService } from '../../services/lang-navigator';

@Component({
    selector: 'app-language-selector',
    imports: [
        CommonModule,
        FontAwesomeModule,
        TranslatePipe,
    ],
    templateUrl: './language-selector.html',
    styleUrl: './language-selector.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { '[class.lang-open]': 'isLanguageSelectionOpen()' },
})
export class LanguageSelector implements OnInit, OnDestroy {
    protected readonly languageIcon: IconDefinition = faLanguage;
    protected readonly languages: LanguageCode[] = availableLanguagesCode;

    private readonly _isLanguageSelectionOpen: WritableSignal<boolean> = signal(false);
    public readonly isLanguageSelectionOpen: Signal<boolean> = this._isLanguageSelectionOpen.asReadonly();

    private readonly langNavigator: LangNavigatorService = inject(LangNavigatorService);
    private readonly translate: TranslateService = inject(TranslateService);
    private readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);

    private readonly _currentLanguage: WritableSignal<string> = signal(this.translate.getCurrentLang());
    public readonly currentLanguage: Signal<string> = this._currentLanguage.asReadonly();

    private outsideClickListener?: (e: MouseEvent) => void;
    private langChangeSub?: Subscription;

    public ngOnInit(): void {
        this.langChangeSub = this.translate.onLangChange.subscribe(() => {
            this._currentLanguage.set(this.translate.getCurrentLang());
        });

        this.outsideClickListener = (e: MouseEvent): void => {
            const path: EventTarget[] | undefined = e.composedPath ? e.composedPath() : (e as unknown as { path?: EventTarget[] }).path;
            const host: HTMLElement = this.elementRef.nativeElement;
            if (!path || !path.includes(host)) {
                this._isLanguageSelectionOpen.set(false);
            }
        };
        document.addEventListener('click', this.outsideClickListener);
    }

    public ngOnDestroy(): void {
        this.langChangeSub?.unsubscribe();
        if (this.outsideClickListener) {
            document.removeEventListener('click', this.outsideClickListener);
            this.outsideClickListener = undefined;
        }
    }

    public selectLanguage(lang: LanguageCode): void {
        void this.langNavigator.setLanguage(lang).then(() => {
            this._isLanguageSelectionOpen.set(false);
        }).catch(() => {
            this._isLanguageSelectionOpen.set(false);
        });
    }

    public toggleLanguageSelectionMenu(): void {
        this._isLanguageSelectionOpen.update((prev: boolean): boolean => !prev);
    }

    public onToggleButtonKeydown(event: KeyboardEvent): void {
        const key: string = event.key;
        if (key === 'ArrowDown' || key === 'Enter' || key === ' ') {
            event.preventDefault();
            this._isLanguageSelectionOpen.set(true);
            this.focusElement(`lang-option-${this.languages[0]}`);
        } else if (key === 'Escape') {
            this._isLanguageSelectionOpen.set(false);
        }
    }

    public onMenuItemKeydown(event: KeyboardEvent, lang: LanguageCode): void {
        const key: string = event.key;
        if (key === 'Escape') {
            this._isLanguageSelectionOpen.set(false);
            this.focusElement('toggle-btn');
            return;
        }

        const idx: number = this.languages.indexOf(lang);
        if (key === 'ArrowDown') {
            event.preventDefault();
            const next: LanguageCode | undefined = this.languages[(idx + 1) % this.languages.length];
            this.focusElement(`lang-option-${next}`);
        } else if (key === 'ArrowUp') {
            event.preventDefault();
            const prev: LanguageCode | undefined = this.languages[(idx - 1 + this.languages.length) % this.languages.length];
            this.focusElement(`lang-option-${prev}`);
        } else if (key === 'Enter' || key === ' ') {
            event.preventDefault();
            this.selectLanguage(lang);
        }
    }

    private focusElement(id: string): void {
        const el = document.getElementById(id) as HTMLElement | null;
        el?.focus();
    }
}
